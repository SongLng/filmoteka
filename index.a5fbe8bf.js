const e=document.querySelector(".nav__btn--home"),r=document.querySelector(".nav__btn--library"),s=document.querySelector(".form__wrapper"),a=document.querySelector(".library"),t=document.querySelector(".header__home");r.addEventListener("click",(()=>{e.classList.remove("nav__btn--home--current"),r.classList.add("nav__btn--library--current"),s.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),t.classList.remove("header__home"),t.classList.add("header__library")}));e.addEventListener("click",(()=>{r.classList.remove("nav__btn--library--current"),e.classList.add("nav__btn--home--current"),s.classList.remove("visually-hidden"),a.classList.add("visually-hidden"),t.classList.add("header__home"),t.classList.remove("header__library")}));
//# sourceMappingURL=index.a5fbe8bf.js.map
