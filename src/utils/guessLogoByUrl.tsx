import { FC, ReactElement } from "react";
import Bento from "../assets/Bento";
import Discord from "../assets/Discord";
import Facebook from "../assets/Facebook";
import Github from "../assets/Github";
import Gitlab from "../assets/Gitlab";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import Malt from "../assets/Malt";
import Mastodon from "../assets/Mastodon";
import Reddit from "../assets/Reddit";
import Stackoverflow from "../assets/Stackoverflow";
import Telegram from "../assets/Telegram";
import Twitter from "../assets/Twitter";
import Website from "../assets/Website";
import Youtube from "../assets/Youtube";

const guessLogoByUrl: FC<{url: string}> = ({url}): ReactElement | null => {
    switch (true) {
        case url.startsWith('https://github.com/'):
            return <Github />;

        case url.startsWith('https://twitter.com/'):
        case url.startsWith('https://x.com/'):
            return <Twitter />;

        case url.startsWith('https://www.linkedin.com/'):
            return <LinkedIn />;

        case url.startsWith('https://gitlab.com/'):
            return <Gitlab />;

        case url.startsWith('https://www.malt.'):
            return <Malt />;

        case url.startsWith('https://www.youtube.com/'):
            return <Youtube />;

        case url.startsWith('https://stackoverflow.com/'):
            return <Stackoverflow />;

        case url.startsWith('https://bento.me/'):
            return <Bento />;

        case url.startsWith('https://dsc.bio/'):
        case url.startsWith('https://discord.com/'):
            return <Discord />;
        
        case url.startsWith('https://mastodon.social/'):
            return <Mastodon />;

        case url.includes('instagram'):
            return <Instagram />;

        case url.includes('reddit'):
            return <Reddit />;

        case url.startsWith('https://t.me/'):
            return <Telegram />;

        case url.includes('facebook'):
            return <Facebook />;
        
        default:
            return <Website />;
    }
}

export default guessLogoByUrl;
