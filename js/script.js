import { handleReadMoreButton } from "./readMoreButton.js";
import { handleScrollButton } from "./scrollButton.js";
import { handleCopyEmail } from "./copyEmail.js";
import { reveal } from "./scrollReveal.js";
import { showProjectsInfo } from "./showProjectsInfo.js";

showProjectsInfo();
reveal();
handleReadMoreButton();
handleCopyEmail();
handleScrollButton();

