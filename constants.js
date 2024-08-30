export const $ = (el) => document.querySelector(el);
export const $$ = (el) => document.querySelectorAll(el);

export const $table = $("table") || document.querySelector("table");
export const $head = $("thead") || document.querySelector("thead");
export const $body = $("tbody") || document.querySelector("tbody");


export const keyDownList = [ "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];