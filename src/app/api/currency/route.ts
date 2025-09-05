import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    // درخواست به سایت tgju.org
    const res = await fetch("https://www.tgju.org/currency");
    const html = await res.text();

    // پارس کردن با cheerio
    const $ = cheerio.load(html);

    // انتخاب آخرین قیمت دلار (باید بر اساس selector مناسب استخراج بشه)
    // در حال حاضر آی‌دی دلار معمولا 'price_dollar_rl' هست
    const priceDollar = $("#l-price_dollar_rl .info-price").text().trim();
    const priceGoldGram = $("#l-geram18 .info-price").text().trim();

    // زمان بروزرسانی (اگر موجود باشه)
    const lastUpdate = $(".market-time").first().text().trim();

    return NextResponse.json({
      priceDollar,
      priceGoldGram,
      last_update: lastUpdate || null,
      source: "https://www.tgju.org/currency",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "خطا در دریافت قیمت دلار", details: error.message },
      { status: 500 }
    );
  }
}
