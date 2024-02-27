import { socialIcons } from "../constants";
import SocialIcon from "./socialicon";

const QuickSocialLinks = () => {


    return (
        <div className="quick-social-icons absolute left-0 bottom-10 h-fit w-fit lg:flex md:flex flex-col hidden">
            {
                socialIcons.map((item, index) => <SocialIcon key={index} item={item} />)
            }
        </div>
    )
}

export default QuickSocialLinksq