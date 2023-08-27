import { handleReadMoreButton } from "./readMoreButton.js";
import { showProjectsInfo } from "./showProjectsInfo.js";
import { handleScrollButton } from "./scrollButton.js";
import { handleCopyEmail } from "./copyEmail.js";
import { reveal } from "./scrollReveal.js";
import { showMobileMenu } from "./showMobileMenu.js";

reveal();
showMobileMenu();
handleCopyEmail();
showProjectsInfo();
handleScrollButton();
handleReadMoreButton();
