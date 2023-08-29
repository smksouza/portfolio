import { handleReadMoreButton } from "./readMoreButton.js";
import { showProjectsInfo } from "./showProjectsInfo.js";
import { handleScrollButton } from "./scrollButton.js";
import { showMobileMenu } from "./showMobileMenu.js";
import { handleCopyEmail } from "./copyEmail.js";
import { reveal } from "./scrollReveal.js";

reveal();
showMobileMenu();
showProjectsInfo();
handleScrollButton();
handleReadMoreButton();
handleCopyEmail("copyEmail1");
handleCopyEmail("copyEmail2");
