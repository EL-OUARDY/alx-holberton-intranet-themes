import { Github } from "lucide-react";
import { REPO_LINK } from "@/shared/constants";
import { buttonVariants } from "./ui/button";

function Contribute() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg border p-4">
      <p>
        I would love for you to contribute and add your own unique themes. It’s
        super easy! I've made sure that contributing won’t take much of your
        time. You can create a theme in just a few minutes! Plus, I’ve included
        a detailed, step-by-step guide to help you add your themes effortlessly.
        Your theme will be published and available for everyone to use and
        enjoy. Let’s build something awesome together! 🚀💪
      </p>
      <div className="mt-3">
        <a
          href={REPO_LINK}
          target="_blank"
          className={
            buttonVariants({ variant: "default" }) + "cursor-pointer text-xs"
          }
        >
          <Github className="mr-2 size-4" /> Make your own theme
        </a>
      </div>
    </div>
  );
}

export default Contribute;
