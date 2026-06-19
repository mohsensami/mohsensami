import { socialSignInAction } from "@/lib/actions/auth";

type SocialLoginButtonsProps = {
  googleEnabled: boolean;
  githubEnabled: boolean;
};

export function SocialLoginButtons({
  googleEnabled,
  githubEnabled,
}: SocialLoginButtonsProps) {
  if (!googleEnabled && !githubEnabled) return null;

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-stone-200" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-2 text-stone-500">یا ورود با</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {googleEnabled && (
          <form action={socialSignInAction.bind(null, "google")}>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
            >
              <span>Google</span>
            </button>
          </form>
        )}
        {githubEnabled && (
          <form action={socialSignInAction.bind(null, "github")}>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
            >
              <span>GitHub</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
