import{j as e,O as ue,s as V,r as n,R as E,C as F,M as W,B as ae,u as se,a as Q,H as js,b as hs,c as xe,d as rs,e as ve,N as ke,f as ee,F as Fs,g as Ds,h as ks,i as Ps,k as Cs,l as ys,m as ws,n as Es,o as As,p as Vs,q as Us,t as Js,I as Ws,v as Ss,w as Ls,x as zs,Q as y,y as Ms,z as Se,A as Ts,D as Is,E as Le,G as Rs,V as Bs,J as Os,K as ze,L as Me,P as $s,S as fe,T as B,U as Gs,W as Hs,X as Zs,Y as Ks,Z as Te,_ as _s,$ as Ys,a0 as Ee,a1 as Ae,a2 as Qs,a3 as H,a4 as qe,a5 as Ie,a6 as ns,a7 as qs,a8 as Xs,a9 as et,aa as ls,ab as st,ac as tt,ad as it,ae as Re,af as Be,ag as ot,ah as Oe,ai as $e,aj as Ge,ak as He,al as rt,am as as,an as cs,ao as nt,ap as ps,aq as Ze,ar as Ke,as as _e,at as lt,au as at,av as ct,aw as pt}from"./vendor-CV1hQqxI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const mt=()=>e.jsxDEV("div",{children:e.jsxDEV(ue,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/HomePage.jsx",lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/HomePage.jsx",lineNumber:6,columnNumber:5},void 0),dt=V.div`
  h2 {
    margin-bottom: 20px;
  }
  .macros-row {
    margin-bottom: 2em;
  }
  .link-col {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
  .macros-box {
    width: 90%;
    min-height: 350px;
    margin: 0rem 1rem 1rem 1rem;
    background-color: var(--grey-300);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .macros-col {
    height: 100%;
    margin-top: 0px;
  }

  .macros-circles {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .circle {
    width: min(20vw, 80px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    flex-shrink: 0;
  }

  /* Different colors for different macros */
  .protein {
    border: 4px solid #ff6b6b;
  }

  .carbs {
    border: 4px solid #4dabf7;
  }

  .fats {
    border: 4px solid #ffd43b;
  }

  .calories {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: auto; /* Push to the bottom */
  }

  .choice-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .choice-buttons-div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 5px;
    min-width: 200px;
    text-align: center;
    font-weight: bold;
  }

  .choice-buttons-div p {
    margin-bottom: 0px;
    text-align: center;
  }
  .choice-buttons-div button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
  }
  .choice-buttons-div button svg {
    width: 24px;
    height: 24px;
    fill: black;
  }
  .choice-buttons-div p {
    flex-grow: 1;
    text-align: center;
    margin: 0;
    font-size: 16px;
  }
  .one {
    background-color: var(--primary-500);
  }
  .two {
    background-color: var(--grey-300);
  }
  .choice-buttons-div svg {
    width: 5%;
  }

  .link-col {
    text-align: center;
    color: var(--white);
    background-color: var(--primary-500);
    border-radius: 12px;
    padding: 1rem;
    width: 90%;
    margin: 1rem 1rem 2rem 1rem;
  }
  .link-col p {
    margin-bottom: 0;
    color: var(--white);
  }
  .macros-col {
    min-height: 350px; /* Or use h-100 in className if parent allows */
  }
  .suggest-food-div {
    width: 90%;
    background-color: var(--grey-300);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .suggest-food-div .suggestion-button {
    width: 100%;
    margin-left: 0px;
    margin-top: 1rem;
  }
  .suggest-food-select {
    height: 40px;
    padding: 0.5rem;
    background-color: var(--primary-200);
    color: white;
  }
  .suggestion-button {
    border: none;
    border-radius: 12px;
    text-align: center;
    color: var(--white);
    width: 90%;
    padding: 1rem;
    margin: 0rem 1rem 1rem 1rem;
  }

  .meal-type-dropdown {
    position: relative;
  }

  .custom-select {
    appearance: none;
    padding-right: 30px;
    background-color: #fff;
  }

  .dropdown-arrow {
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
  }

  .one {
    background-color: var(--primary-400);
  }
  .two {
    background-color: var(--purple-400);
  }

  @media (max-width: 768px) {
    .link-row {
      flex-direction: column;
    }
    .choice-buttons {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .choice-buttons-div {
      width: 80%;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    .circle {
      width: min(25vw, 60px);
    }
  }
`,ut=V.div`
  .meal-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    max-width: 380px;
    margin: auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: left;
  }

  .calories {
    font-size: 14px;
    color: #666;
  }

  .meal-type,
  .goal {
    font-size: 16px;
    color: #555;
    text-align: left;
  }

  .macros {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 10px 0;
    margin-bottom: 10px;
  }

  .macro-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    width: min(20vw, 80px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  .macro-item p {
    font-size: 18px;
    font-weight: bold;
    color: #222;
  }

  .protein p {
    color: red;
  }
  .carbs p {
    color: blue;
  }
  .fats p {
    color: orange;
  }
  p {
    margin: auto;
  }
  .macro-item span {
    font-size: 14px;
    font-weight: bold;
    margin-top: 6px;
    color: #333;
  }

  .see-more {
    background-color: #007bff;
    color: white;
    padding: 4px 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    text-align: right;
  }

  .see-more:hover {
    background-color: #0056b3;
  }
  .bottom-card {
    margin-top: 20px;
  }
`,vt=({_id:i,name:t,categoryMeal:o,category:l,calories:s,protein:a,carbs:p,fats:g,ingredients:v,recipe:r})=>{const[c,u]=n.useState(!1),x=()=>u(!1),d=()=>u(!0),f=v?.split(",").map(j=>j.trim())||[],h=r?.split(/\n|\d+\.\s/).filter(Boolean)||[];return e.jsxDEV(ut,{children:[e.jsxDEV("div",{className:"meal-card",children:[e.jsxDEV("h3",{children:[t,e.jsxDEV("span",{className:"calories",children:[" (",s," cal)"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:34,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:32,columnNumber:9},void 0),e.jsxDEV("p",{className:"meal-type",children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:36,columnNumber:9},void 0),e.jsxDEV("div",{className:"macros",children:[e.jsxDEV("div",{className:"macro-item protein",children:[e.jsxDEV("p",{children:[a,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:39,columnNumber:13},void 0),e.jsxDEV("span",{children:"P"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:40,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:38,columnNumber:11},void 0),e.jsxDEV("div",{className:"macro-item carbs",children:[e.jsxDEV("p",{children:[p,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:43,columnNumber:13},void 0),e.jsxDEV("span",{children:"C"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:44,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:42,columnNumber:11},void 0),e.jsxDEV("div",{className:"macro-item fats",children:[e.jsxDEV("p",{children:[g,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:47,columnNumber:13},void 0),e.jsxDEV("span",{children:"F"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:48,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:46,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:37,columnNumber:9},void 0),e.jsxDEV(E,{className:"bottom-card align-items-center",children:[e.jsxDEV(F,{children:e.jsxDEV("p",{className:"goal",children:l},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:53,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:52,columnNumber:11},void 0),e.jsxDEV(F,{children:e.jsxDEV("button",{className:"see-more",onClick:d,children:"See More"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:56,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:55,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:51,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:31,columnNumber:7},void 0),e.jsxDEV(W,{show:c,onHide:x,centered:!0,children:[e.jsxDEV(W.Header,{closeButton:!0,children:e.jsxDEV(W.Title,{children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:66,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:65,columnNumber:9},void 0),e.jsxDEV(W.Body,{children:[e.jsxDEV("h5",{children:["Calories: ",s," kcal"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:69,columnNumber:11},void 0),e.jsxDEV("p",{children:["Protein: ",a,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:70,columnNumber:11},void 0),e.jsxDEV("p",{children:["Carbs: ",p,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:71,columnNumber:11},void 0),e.jsxDEV("p",{children:["Fats: ",g,"g"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:72,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:74,columnNumber:11},void 0),e.jsxDEV("h6",{children:"Ingredients:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:75,columnNumber:11},void 0),f.length>0?e.jsxDEV("ul",{children:f.map((j,b)=>e.jsxDEV("li",{children:j},b,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:79,columnNumber:17},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:77,columnNumber:13},void 0):e.jsxDEV("p",{children:"No ingredient info available."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:83,columnNumber:13},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:86,columnNumber:11},void 0),e.jsxDEV("h6",{children:"Recipe:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:87,columnNumber:11},void 0),h.length>0?e.jsxDEV("ol",{children:h.map((j,b)=>e.jsxDEV("li",{children:j},b,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:91,columnNumber:17},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:89,columnNumber:13},void 0):e.jsxDEV("p",{children:"No recipe info available."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:95,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:68,columnNumber:9},void 0),e.jsxDEV(W.Footer,{children:e.jsxDEV(ae,{variant:"secondary",onClick:x,children:"Close"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:99,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:98,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:64,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Meal.jsx",lineNumber:30,columnNumber:5},void 0)},Xe=V.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .meals {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .meals {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`,ft=V.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--white);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    background: var(--background-secondary-color);
    border-color: transparent;
    border-radius: var(--border-radius);
    width: 100px;
    height: 40px;
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`,Nt=()=>{const{data:{numOfPages:i,currentPage:t}}=Qe(),o=se(),l=Q(),s=Number(t)||1,a=Number(i)||1,p=r=>{const c=new URLSearchParams(o.search);c.set("page",r),l(`${o.pathname}?${c.toString()}`)},g=({pageNumber:r,activeClass:c})=>e.jsxDEV("button",{className:`btn page-btn ${c?"active":""}`,onClick:()=>p(r),children:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:30,columnNumber:7},void 0),v=()=>{const r=[];return r.push(e.jsxDEV(xe.Fragment,{children:g({pageNumber:1,activeClass:s===1})},"page-1",!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:44,columnNumber:7},void 0)),s>3&&r.push(e.jsxDEV("span",{className:"page-btn dots",children:"...."},"dots-1",!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:51,columnNumber:9},void 0)),s!==1&&s!==2&&r.push(e.jsxDEV(xe.Fragment,{children:g({pageNumber:s-1,activeClass:!1})},`page-${s-1}`,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:59,columnNumber:9},void 0)),s!==1&&s!==a&&s!==0&&r.push(e.jsxDEV(xe.Fragment,{children:g({pageNumber:s,activeClass:!0})},`page-${s}`,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:74,columnNumber:9},void 0)),s!==a&&s!==a-1&&r.push(e.jsxDEV(xe.Fragment,{children:g({pageNumber:s+1,activeClass:!1})},`page-${s+1}`,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:88,columnNumber:9},void 0)),s<a-2&&r.push(e.jsxDEV("span",{className:"page-btn dots",children:"...."},"dots+1",!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:99,columnNumber:9},void 0)),r.push(e.jsxDEV(xe.Fragment,{children:g({pageNumber:a,activeClass:s===a})},`page-${a}`,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:107,columnNumber:7},void 0)),r};return e.jsxDEV(ft,{children:[e.jsxDEV("button",{className:"prev-btn",onClick:()=>{let r=s-1;r<1&&(r=a),p(r)},children:[e.jsxDEV(js,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:128,columnNumber:9},void 0),"prev"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:120,columnNumber:7},void 0),e.jsxDEV("div",{className:"btn-container",children:v()},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:131,columnNumber:7},void 0),e.jsxDEV("button",{className:"btn next-btn",onClick:()=>{let r=s+1;r>a&&(r=1),p(r)},children:["next",e.jsxDEV(hs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:141,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:132,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/PageBtnContainer.jsx",lineNumber:119,columnNumber:5},void 0)},ms=({meals:i})=>{const{data:t}=Qe(),o=i||t.meals||[],l=i?i.length:t.totalMeals||0,s=t.numOfPages||1;return!Array.isArray(o)||o.length===0?e.jsxDEV(Xe,{children:e.jsxDEV("h5",{children:"No meals found"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:18,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:17,columnNumber:7},void 0):e.jsxDEV(Xe,{children:[e.jsxDEV("h5",{children:[l," meal",l!==1?"s":""," found"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:25,columnNumber:7},void 0),e.jsxDEV("div",{className:"meals",children:o.map(a=>e.jsxDEV(vt,{...a},a._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:30,columnNumber:11},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:28,columnNumber:7},void 0),!i&&s>1&&e.jsxDEV(Nt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:33,columnNumber:44},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/MealContainer.jsx",lineNumber:24,columnNumber:5},void 0)},gt="https://www.fittestsapp.com/api/v1",A=rs.create({baseURL:gt,withCredentials:!0}),bt=V.div`
  Link {
    cursor: pointer;
  }
  .logo {
    border-radius: 6px;
  }
  .fluid {
    position: sticky;
    z-index: 1;
    max-width: 100%;
    background-image: linear-gradient(var(--primary-500), var(--primary-300));
    //border-radius: 0px 0px 15px 15px;
  }
  .navbar-items {
    color: var(--black);
    font-size: 18px;
    padding-left: 15px;
    white-space: nowrap;
  }
  .navbar-items:hover {
    color: var(--white);
    transition: var(--transition);
  }
  .toggle-icon {
    color: var(--black);
    font-size: 2rem;
    outline: none;
  }
  .navbar-toggler {
    outline: none;
    border: none;
  }
  @media (max-width: 991px) {
    .navbar-items {
      padding: 6px;
    }
  }
`,xt="/assets/logo-RMM5KPhj.png",jt=()=>e.jsxDEV("img",{src:xt,alt:"fittest",className:"logo",width:"30px"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Logo.jsx",lineNumber:4,columnNumber:10},void 0),ht=()=>e.jsxDEV(bt,{children:e.jsxDEV(ve,{className:"fluid",children:e.jsxDEV(ke,{expand:"lg",className:"py-4 px-4 sticky-top",children:[e.jsxDEV(ke.Brand,{children:e.jsxDEV(ee,{to:"#section-one",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:e.jsxDEV(jt,{className:"logo"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:23,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:15,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:14,columnNumber:11},void 0),e.jsxDEV(ke.Toggle,{"aria-controls":"basic-navbar-nav",children:e.jsxDEV(Fs,{className:"toggle-icon"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:29,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:28,columnNumber:11},void 0),e.jsxDEV(ke.Collapse,{id:"basic-navbar-nav",children:e.jsxDEV(Ds,{className:"ml-auto",children:[e.jsxDEV(ee,{to:"#section-two",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"About"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:35,columnNumber:15},void 0),e.jsxDEV(ee,{to:"#section-three",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"Pricing"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:45,columnNumber:15},void 0),e.jsxDEV(ee,{to:"/ebooks",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"E-books"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:55,columnNumber:15},void 0),e.jsxDEV(ee,{to:"/terms-and-conditions",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"Terms & conditions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:65,columnNumber:15},void 0),e.jsxDEV(ee,{to:"/privacy-policy",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"Privacy policy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:75,columnNumber:15},void 0),e.jsxDEV(ee,{to:"#section-four",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active",children:"Contact"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:85,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:34,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:33,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:13,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:12,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavigationBar.jsx",lineNumber:11,columnNumber:5},void 0),Ft=V.section`
  footer {
    background-color: var(--grey-100);
  }
  .text-reset {
    text-align: center;
    padding: 12px;
  }
  .text-center p-4 {
    margin-bottom: 50px;
  }
`,ds=()=>{const i=new Date().getFullYear();return e.jsxDEV(Ft,{children:e.jsxDEV("footer",{className:" text-center text-lg-start text-muted mt-4",children:[e.jsxDEV("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom",children:e.jsxDEV("div",{className:"mx-auto",children:[e.jsxDEV("a",{href:"#",className:"text-reset",children:e.jsxDEV(ks,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:29,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:28,columnNumber:13},void 0),e.jsxDEV("a",{href:"#",className:"text-reset",children:e.jsxDEV(Ps,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:32,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:31,columnNumber:13},void 0),e.jsxDEV("a",{href:"https://www.instagram.com/app_fittest?igsh=MXVicDBsb3JkY28w",target:"blank",className:"text-reset",children:e.jsxDEV(Cs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:39,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:34,columnNumber:13},void 0),e.jsxDEV("a",{href:"#",className:"text-reset",children:e.jsxDEV(ys,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:42,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:41,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:27,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:26,columnNumber:9},void 0),e.jsxDEV("section",{className:"",children:e.jsxDEV(ve,{className:"text-center text-md-start mt-5",children:e.jsxDEV(E,{className:"mt-3",children:[e.jsxDEV(F,{md:"3",lg:"4",xl:"3",className:"mx-auto mb-4",children:[e.jsxDEV("h6",{className:"text-uppercase fw-bold mb-4 mx-auto",children:"FITTEST"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:51,columnNumber:17},void 0),e.jsxDEV("p",{children:"Achieve your fitness goals with personalized workouts, meal advices and much more."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:52,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:50,columnNumber:15},void 0),e.jsxDEV(F,{md:"3",lg:"2",xl:"2",className:"mx-auto mb-4",children:[e.jsxDEV("h6",{className:"text-uppercase fw-bold mb-4",children:"Useful links"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:59,columnNumber:17},void 0),e.jsxDEV("p",{children:e.jsxDEV(ee,{to:"#section-two",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active text-reset",children:"About"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:61,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:60,columnNumber:17},void 0),e.jsxDEV("p",{children:e.jsxDEV(ee,{to:"#section-three",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active text-reset",children:"Pricing"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:73,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV("p",{children:e.jsxDEV(ee,{to:"#section-four",smooth:!0,duration:500,spy:!0,offset:-50,className:"mr-3 navbar-items active text-reset",children:"Contact"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:85,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:84,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:58,columnNumber:15},void 0),e.jsxDEV(F,{md:"4",lg:"3",xl:"3",className:"mx-auto mb-md-0 mb-4",children:[e.jsxDEV("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:99,columnNumber:17},void 0),e.jsxDEV("p",{children:[e.jsxDEV(ws,{className:"me-2"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:101,columnNumber:19},void 0),"Kochani, Macedonia"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:100,columnNumber:17},void 0),e.jsxDEV("p",{children:[e.jsxDEV(Es,{className:"me-3"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:105,columnNumber:19},void 0),"fittestsapp@gmail.com"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:104,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:98,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:49,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:48,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:47,columnNumber:9},void 0),e.jsxDEV("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:["© ",i," FITTEST. All Rights Reserved."]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:119,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:25,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Footer.jsx",lineNumber:24,columnNumber:5},void 0)},Dt=[{text:"Dashboard",path:".",icon:e.jsxDEV(As,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:12,columnNumber:41},void 0)},{text:"Workout",path:"workout",icon:e.jsxDEV(Vs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:13,columnNumber:45},void 0)},{text:"Diet",path:"diet/macros",icon:e.jsxDEV(Us,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:14,columnNumber:46},void 0)},{text:"Progress",path:"progress",icon:e.jsxDEV(Js,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:15,columnNumber:47},void 0)},{text:"Profile",path:"profile",icon:e.jsxDEV(Ws,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:16,columnNumber:45},void 0)},{text:"Achievements",path:"achievements",icon:e.jsxDEV(Ss,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/utils/links.jsx",lineNumber:17,columnNumber:55},void 0)}],kt=V.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,Pt=V.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--black);
    width: var(--fluid-width);
    height: 80vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 15px;
    left: 15px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--white);
    cursor: pointer;
  }
  .close-btn:hover {
    color: var(--primary-500);
    transition: var(--transition);
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`,Ct=()=>{const{showSidebar:i,toggleSidebar:t}=De();return e.jsxDEV(Pt,{children:e.jsxDEV("div",{className:i?"sidebar-container show-sidebar":"sidebar-container",children:e.jsxDEV("div",{className:"content",children:[e.jsxDEV("button",{onClick:t,type:"button",className:"close-btn",children:e.jsxDEV(Ls,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:20,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:19,columnNumber:11},void 0),e.jsxDEV(vs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:25,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:18,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:13,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SmallSidebar.jsx",lineNumber:12,columnNumber:5},void 0)},yt=V.nav`
  width: 100%;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(var(--primary-400), var(--white));
  .nav-center {
    display: flex;
    width: 80vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 50px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
      color: var(--text-secondary-color);
    }
  }
`,wt=V.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`,Et=()=>{const[i,t]=n.useState(!1),{user:o}=De(),l=Q(),s="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",a=async()=>{l("/"),await A.get("/auth/logout",{headers:{"x-api-key":s,"Content-Type":"application/json"}}),y.success("Logging out...")};return e.jsxDEV(wt,{children:[e.jsxDEV("button",{type:"button",className:"btn logout-btn",onClick:()=>t(!i),children:[o?.name,e.jsxDEV(zs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/LogoutContainer.jsx",lineNumber:42,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/LogoutContainer.jsx",lineNumber:30,columnNumber:7},void 0),e.jsxDEV("div",{className:i?"dropdown show-dropdown":"dropdown",children:e.jsxDEV("button",{type:"button",className:"dropdown-btn",onClick:a,children:"logout"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/LogoutContainer.jsx",lineNumber:45,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/LogoutContainer.jsx",lineNumber:44,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/LogoutContainer.jsx",lineNumber:29,columnNumber:5},void 0)},At=()=>{const{toggleSidebar:i}=De();return e.jsxDEV(yt,{children:e.jsxDEV("div",{className:"nav-center",children:[e.jsxDEV("button",{onClick:i,type:"button",className:"toggle-btn",children:e.jsxDEV(Ms,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:14,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:13,columnNumber:9},void 0),e.jsxDEV("h4",{className:"logo-text",children:"FITTEST"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:16,columnNumber:9},void 0),e.jsxDEV("div",{className:"btn-container",children:[e.jsxDEV(Et,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:18,columnNumber:11},void 0)," "]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:17,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:12,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavbarDashboardPage.jsx",lineNumber:11,columnNumber:5},void 0)},Vt=async()=>{try{const i="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{data:t}=await A.get("/users/current-user",{headers:{"x-api-key":i,"Content-Type":"application/json"}});return t}catch{return Se("/login")}},us=n.createContext(),Ut=()=>{const{user:i}=Ts(),t=Q(),[o,l]=n.useState(!1),s=n.useRef(!1);n.useEffect(()=>{(async()=>{if(!i?._id)return;const v=new Date().toDateString();if(localStorage.getItem("lastDailyLogin")!==v)try{(await A.post(`/gamification/daily-login/${i._id}`,{},{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO","Content-Type":"application/json"}})).data.xpGained>0?y.success("You earned your daily login XP!"):y.info("XP already claimed for today."),localStorage.setItem("lastDailyLogin",v)}catch(c){console.error("Daily login error:",c)}})()},[i?._id]),console.log(s);const a=()=>{l(!o)},p=async()=>{t("/"),await A.get("/auth/logout"),y.success("Logging out...")};return e.jsxDEV(us.Provider,{value:{user:i,showSidebar:o,toggleSidebar:a,logoutUser:p},children:e.jsxDEV(kt,{children:e.jsxDEV("main",{className:"dashboard",children:[e.jsxDEV(Ct,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV(Wt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:91,columnNumber:11},void 0),e.jsxDEV("div",{children:[e.jsxDEV(At,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:93,columnNumber:13},void 0),e.jsxDEV("div",{className:"dashboard-page",children:e.jsxDEV(ue,{context:{user:i}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:95,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:94,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:92,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:89,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:88,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardPage.jsx",lineNumber:85,columnNumber:5},void 0)},De=()=>n.useContext(us),vs=({isBigSidebar:i})=>{const{toggleSidebar:t,user:o}=De();return e.jsxDEV("div",{className:"nav-links",children:Dt.map(l=>{const{text:s,path:a,icon:p}=l;return e.jsxDEV(Is,{to:a,className:"nav-link",onClick:i?null:t,end:!0,children:[e.jsxDEV("span",{className:"icon",children:p},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavLinks.jsx",lineNumber:20,columnNumber:13},void 0),s]},s,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavLinks.jsx",lineNumber:13,columnNumber:11},void 0)})},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/NavLinks.jsx",lineNumber:9,columnNumber:5},void 0)},Jt=V.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--black);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`,Wt=()=>{const{showSidebar:i}=De();return e.jsxDEV(Jt,{children:e.jsxDEV("div",{className:i?"sidebar-container ":" show-sidebar sidebar-container",children:e.jsxDEV("div",{className:"content",children:e.jsxDEV(vs,{isBigSidebar:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BigSidebar.jsx",lineNumber:20,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BigSidebar.jsx",lineNumber:16,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BigSidebar.jsx",lineNumber:11,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BigSidebar.jsx",lineNumber:10,columnNumber:5},void 0)},M=({type:i,name:t,labelText:o,defaultValue:l,placeholder:s,onChange:a,extraElement:p})=>e.jsxDEV("div",{className:"form-row",children:[e.jsxDEV("label",{htmlFor:t,className:"form-label",children:o||t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRow.jsx",lineNumber:14,columnNumber:7},void 0),e.jsxDEV("div",{style:{position:"relative"},children:[e.jsxDEV("input",{type:i,id:t,name:t,className:"form-input",defaultValue:l||"",onChange:a,placeholder:s,required:!0,style:{paddingRight:p?"3rem":void 0}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRow.jsx",lineNumber:18,columnNumber:9},void 0),p&&e.jsxDEV("span",{style:{position:"absolute",right:"0.75rem",top:"50%",transform:"translateY(-50%)",cursor:"pointer",fontSize:"0.85rem",color:"#555"},children:p},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRow.jsx",lineNumber:30,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRow.jsx",lineNumber:17,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRow.jsx",lineNumber:13,columnNumber:5},void 0),es=({name:i,labelText:t,list:o,defaultValue:l="",onChange:s})=>e.jsxDEV("div",{className:"form-row",children:[e.jsxDEV("label",{htmlFor:i,className:"form-label",children:t||i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRowSelect.jsx",lineNumber:12,columnNumber:7},void 0),e.jsxDEV("select",{name:i,id:i,className:"form-select",defaultValue:l,onChange:s,children:o.map(a=>e.jsxDEV("option",{value:a,children:a},a,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRowSelect.jsx",lineNumber:24,columnNumber:13},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRowSelect.jsx",lineNumber:15,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/FormRowSelect.jsx",lineNumber:11,columnNumber:5},void 0),St=({formBtn:i,className:t=""})=>{const l=Le().state==="submitting";return e.jsxDEV("button",{type:"submit",className:`btn btn-block ${i?"form-btn":""} ${t}`,disabled:l,children:l?"Submitting":"Submit"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SubmitBtn.jsx",lineNumber:9,columnNumber:5},void 0)},Lt=V.div`
  .wizard-container {
    max-width: 600px;
    height: fit-content; /* Full screen height */
    //margin: 0 auto;
    margin-bottom: 13rem;
    padding: 20px;
    font-family: "Arial", sans-serif;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Prevents content overflow */
  }

  .progress-bar-container {
    height: 10px;
    width: 100%;
    background: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 5px;
    transition: width 0.4s ease-in-out;
  }

  .slide-container {
    flex: 1; /* Fills remaining space */
    padding: 20px;
    text-align: center;
    overflow-y: auto; /* Enables scrolling if content exceeds height */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  }

  .slide h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .slide p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  .gender-icons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .gender-icons {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px;
    align-items: center;
  }

  /* Each gender icon container */
  .gender-icons-male,
  .gender-icons-female {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.3s ease;
    width: 130px;
    height: 130px;
    position: relative;
    user-select: none; /* Prevent text/icon selection */
    -webkit-tap-highlight-color: transparent; /* Prevent tap highlight on mobile */
  }

  /* Specific icon colors and font weight */
  .gender-icons-male {
    color: #007bff;
    font-weight: 700;
  }

  .gender-icons-female {
    color: var(--purple-500);
    font-weight: 700;
  }

  /* Selected state */
  .gender-icons-male.selected,
  .gender-icons-female.selected {
    transform: scale(1.2);
  }

  /* Ensure colors remain the same when selected */
  .gender-icons-male.selected p {
    color: #007bff;
  }
  .gender-icons-female.selected p {
    color: var(--purple-500);
  }

  /* Hover effect */
  .gender-icons-male:hover,
  .gender-icons-female:hover {
    transform: scale(1.05);
  }

  /* Ensure selected state is visible when hovered */
  .gender-icons-male.selected:hover,
  .gender-icons-female.selected:hover {
    transform: scale(1.1);
  }
  .goal-button.selected {
    background-color: var(--purple-500);
    color: white;
  }

  /* Default gray color */
  /* Default state for Male and Female */
  .gender-icons-male img,
  .gender-icons-female img {
    filter: brightness(0) saturate(100%) invert(46%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(90%) contrast(90%);
  }

  /* When selected, Male turns Blue (approx. #007bff) */
  .gender-icons-male.selected svg {
    filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(900%)
      hue-rotate(190deg) brightness(99%) contrast(100%);
  }

  /* When selected, Female turns Purple (approx. #8400ff) */
  .gender-icons-female.selected svg {
    filter: brightness(0) saturate(100%) invert(20%) sepia(70%) saturate(600%)
      hue-rotate(270deg) brightness(90%) contrast(100%);
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .navigation-buttons button {
    background: #6a11cb;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .navigation-buttons button:hover {
    background: #2575fc;
  }

  .navigation-buttons button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  .submit-button {
    background: #6a11cb;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .goals {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    max-height: 100%;
    overflow-y: auto;
  }

  .goal-button {
    background-color: var(--primary-500);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 8px 25px;
    font-size: 18px;
    width: 100%;
    max-width: 230px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .goal-button:hover {
    background-color: var(--primary-400);
    transform: scale(1.01);
  }

  .goal-button:active {
    background-color: var(--primary-400);
  }

  .weight-height-picker {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .picker-label {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }

  .picker-input {
    width: 100%;
    max-width: 150px;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .react-datepicker-wrapper {
    display: inline;
  }
  .unit-switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; /* Adds spacing between elements */
  }

  .unit-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem; /* Moves inputs further down */
  }

  .unit-toggle button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 5px;
    font-weight: bold;
  }

  .unit-toggle button.active {
    background-color: var(--primary-500); /* Adjust based on your theme */
    color: white;
  }

  .unit-switch button:hover {
    background: #e0e0e0;
  }
  .registration-form {
    background: none;
    margin: auto;
  }
  .registration-form input {
    background: none;
    margin: 5px 0px 5px 0px;
    padding: 5px;
    font-size: 14px;
    border-radius: 8px;
  }
  .create-button {
    color: white;
    background-color: var(--primary-500);
    border-radius: 12px;
    border: none;
    padding: 0.5rem;
    width: 200px;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    .picker-item {
      font-size: 15px;
    }
  }

  /*REGISTER*/
  .form {
    max-width: 400px;
    width: 90vw;
    border-radius: 60px 5px 60px 5px;
    background-color: var(--primary-100);
  }
  .form-input {
    padding: 5px;
  }
  h4,
  h2 {
    text-align: center;
    margin-bottom: 1.38rem;
    font-weight: 800;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.38rem;
  }
  .register-text {
    text-align: center;
    color: var(--black);
    font-weight: 800;
  }
  .btn {
    display: block;
    margin-top: 1rem;
    margin: 0 auto;
  }
  .member-btn {
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }

  .activity-level-options {
    display: flex;
    flex-direction: column;
  }

  .activity-level-option {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .activity-level-option.selected {
    background-color: #007bff; /* Blue background for selected option */
    color: white;
  }
`,zt=({onFormDataChange:i,onFinalStep:t})=>{const[o,l]=n.useState(!1),[s,a]=n.useState(1),[p,g]=n.useState("metric"),[v,r]=n.useState(70),[c,u]=n.useState(175),[x,d]=n.useState(70*2.20462),[f,h]=n.useState(5),[j,b]=n.useState(9),[m,U]=n.useState({name:"",lastName:"",date:"",email:"",password:"",age:21,gender:"",activityLevel:"",fitnessGoal:"",workoutLevel:5,userValues:{weight:70,height:175,muscleInjuries:[],jointInjuries:[],split:"",goal:"none",difficultyLevel:"",restDays:[],equipment:["barbells","machines","dumbbells"],workoutType:"hypertrophy"}}),[L,w]=n.useState(!1),[D,Z]=n.useState(!1),q=()=>{w(N=>!N)},$={broSplit5x:2,fullBody2x:5,fullBody3x:4,fullBody4x:3,pushPullLegs3x:4,pushPullLegs6x:1,pushPullLegsUpperLower5x:2,upperLower2x:5,upperLower3x:4,upperLower4x:3},Y={broSplit5x:5,fullBody2x:2,fullBody3x:3,fullBody4x:4,pushPullLegs3x:3,pushPullLegs6x:6,pushPullLegsUpperLower5x:5,upperLower2x:2,upperLower3x:3,upperLower4x:4};n.useEffect(()=>{if(p==="metric"){d(v*2.20462);const N=c/2.54;h(Math.floor(N/12)),b(Math.round(N%12))}else{r(x/2.20462);const N=f*12+j;u(N*2.54)}},[p,v,c,x,f,j]),n.useEffect(()=>{if(m.date){const N=pe(m.date);isNaN(N)||(U(P=>({...P,age:N.toString()})),i({age:N.toString()}),N<18&&y.warning("You must be at least 18 years old."))}},[m.date]);const oe=N=>{U(P=>{const C=P.userValues.restDays||[],T=$[P.userValues.split]||7;let R;if(C.includes(N))R=C.filter(le=>le!==N);else if(C.length<T)R=[...C,N];else return P;return{...P,userValues:{...P.userValues,restDays:R}}})},re=N=>{const P=m.userValues.muscleInjuries||[],T=P.includes(N)?P.filter(R=>R!==N):[...P,N];S("userValues",{...m.userValues,muscleInjuries:T})},ne=N=>{const P=m.userValues.jointInjuries||[],T=P.includes(N)?P.filter(R=>R!==N):[...P,N];S("userValues",{...m.userValues,jointInjuries:T})},te=N=>{const{name:P,value:C}=N.target;U(T=>({...T,[P]:C})),i({[P]:C})},S=(N,P)=>{U(C=>({...C,[N]:P}))};m.workoutLevel=Y[m.userValues.split]||0;const pe=N=>{if(!(N instanceof Date))return null;const P=new Date;let C=P.getFullYear()-N.getFullYear();const T=P.getMonth()-N.getMonth(),R=P.getDate()-N.getDate();return(T<0||T===0&&R<0)&&C--,C},K=()=>{U(N=>({...N,userValues:{...N.userValues,weight:p==="metric"?v:x/2.20462,height:p==="metric"?c:(f*12+j)*2.54}})),a(N=>N+1)},k=()=>{a(N=>N-1)},z=async()=>{if(D)return;Z(!0);const N={...m};try{await t(N)}catch(P){console.error(P)}finally{Z(!1)}},G=N=>{g(N)},_=N=>{let P=parseFloat(N.target.value)||0;if(P<0){b(0);return}P>=12&&(h(C=>C+Math.floor(P/12)),P=P%12),b(P)},ie=m.date?pe(new Date(m.date)):0;return e.jsxDEV(Lt,{children:e.jsxDEV("div",{className:"wizard-container",children:[e.jsxDEV("div",{className:"progress-bar-container",children:e.jsxDEV("div",{className:"progress-bar",style:{width:`${s/11*100}%`}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:289,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:288,columnNumber:9},void 0),e.jsxDEV("div",{className:"slide-container",children:[s===1&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Gender"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:297,columnNumber:15},void 0),e.jsxDEV("div",{className:"gender-icons",children:[e.jsxDEV("div",{className:`gender-icons-male ${m.gender==="male"?"selected":""}`,onClick:()=>U({...m,gender:"male"}),children:[e.jsxDEV(Rs,{width:"70px",height:"80px"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:305,columnNumber:19},void 0),e.jsxDEV("p",{children:"Male"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:306,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:299,columnNumber:17},void 0),e.jsxDEV("div",{className:`gender-icons-female ${m.gender==="female"?"selected":""}`,onClick:()=>U({...m,gender:"female"}),children:[e.jsxDEV(Bs,{width:"70px",height:"80px"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:315,columnNumber:19},void 0),e.jsxDEV("p",{children:"Female"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:316,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:309,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:298,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:e.jsxDEV("button",{onClick:K,disabled:!m.gender,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:320,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:319,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:296,columnNumber:13},void 0),s===2&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Height and Weight"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:329,columnNumber:15},void 0),e.jsxDEV("div",{className:"unit-switch",children:[e.jsxDEV("div",{className:"unit-toggle",children:[e.jsxDEV("button",{type:"button",className:`toggle-button ${p==="metric"?"active":""}`,onClick:()=>G("metric"),children:"Metric"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:333,columnNumber:19},void 0),e.jsxDEV("button",{type:"button",className:`toggle-button ${p==="imperial"?"active":""}`,onClick:()=>G("imperial"),children:"Imperial"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:342,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:332,columnNumber:17},void 0),p==="metric"?e.jsxDEV("div",{className:"metric-inputs",children:[e.jsxDEV("label",{className:"input-label",children:["Weight (kg):",e.jsxDEV("input",{type:"number",className:"input-field",value:v,onChange:N=>r(N.target.value),"aria-label":"Weight in kilograms"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:358,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:356,columnNumber:21},void 0),e.jsxDEV("label",{className:"input-label",children:["Height (cm):",e.jsxDEV("input",{type:"number",className:"input-field",value:c,onChange:N=>u(N.target.value),"aria-label":"Height in centimeters"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:368,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:366,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:355,columnNumber:19},void 0):e.jsxDEV("div",{className:"imperial-inputs",children:[e.jsxDEV("label",{className:"input-label",children:["Weight (lbs):",e.jsxDEV("input",{type:"number",className:"input-field",value:x,onChange:N=>d(N.target.value),"aria-label":"Weight in pounds"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:381,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:379,columnNumber:21},void 0),e.jsxDEV("label",{className:"input-label",children:["Height (feet):",e.jsxDEV("input",{type:"number",className:"input-field",value:f,onChange:N=>h(N.target.value),"aria-label":"Height in feet"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:391,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:389,columnNumber:21},void 0),e.jsxDEV("label",{className:"input-label",children:["Height (inches):",e.jsxDEV("input",{type:"number",className:"input-field",value:j,onChange:_,"aria-label":"Height in inches"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:401,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:399,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:378,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:330,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{className:"back-button",onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:414,columnNumber:17},void 0),e.jsxDEV("button",{className:"next-button",onClick:K,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:417,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:413,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:328,columnNumber:13},void 0),s===3&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Activity Level"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:426,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:[e.jsxDEV("div",{className:`activity-level-option ${m.activityLevel==="Sedentary"?"selected":""}`,onClick:()=>S("activityLevel","Sedentary"),children:"Sedentary"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:429,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.activityLevel==="Lightly active"?"selected":""}`,onClick:()=>S("activityLevel","Lightly active"),children:"Lightly active"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:439,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.activityLevel==="Moderately active"?"selected":""}`,onClick:()=>S("activityLevel","Moderately active"),children:"Moderately active"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:451,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.activityLevel==="Very active"?"selected":""}`,onClick:()=>S("activityLevel","Very active"),children:"Very active"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:463,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.activityLevel==="Extra active"?"selected":""}`,onClick:()=>S("activityLevel","Extra active"),children:"Extra active"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:473,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:428,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:486,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.activityLevel,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:487,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:485,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:425,columnNumber:13},void 0),s===4&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Tell us your fitness goals!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:496,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:[e.jsxDEV("div",{className:`activity-level-option ${m.fitnessGoal==="Muscle Gain"?"selected":""}`,onClick:()=>S("fitnessGoal","Muscle Gain"),children:"Muscle gain"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:498,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.fitnessGoal==="Maintenance"?"selected":""}`,onClick:()=>S("fitnessGoal","Maintenance"),children:"Maintenance"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:508,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.fitnessGoal==="Weight Loss"?"selected":""}`,onClick:()=>S("fitnessGoal","Weight Loss"),children:"Weight loss"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:518,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:497,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:530,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.fitnessGoal,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:531,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:529,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:495,columnNumber:13},void 0),s===5&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Difficulty Level"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:540,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:[e.jsxDEV("div",{className:`activity-level-option ${m.userValues.difficultyLevel==="Beginner"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,difficultyLevel:"Beginner"}),children:"Beginner"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:542,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.difficultyLevel==="Intermediate"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,difficultyLevel:"Intermediate"}),children:"Intermediate"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:557,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.difficultyLevel==="Advanced"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,difficultyLevel:"Advanced"}),children:"Advanced"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:572,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:541,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:589,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.userValues.difficultyLevel,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:590,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:588,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:539,columnNumber:13},void 0),s===6&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Choose your workout split!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:602,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:[e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="broSplit5x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"broSplit5x"}),children:"Bro Split 5x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:604,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="fullBody2x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"fullBody2x"}),children:"Full Body 2x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:617,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="fullBody3x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"fullBody3x"}),children:"Full Body 3x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:630,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="fullBody4x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"fullBody4x"}),children:"Full Body 4x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:643,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="pushPullLegs3x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"pushPullLegs3x"}),children:"Push Pull Legs 3x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:656,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="pushPullLegs6x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"pushPullLegs6x"}),children:"Push Pull Legs 6x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:671,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="pushPullLegsUpperLower5x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"pushPullLegsUpperLower5x"}),children:"PPL Upper Lower 5x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:686,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="upperLower2x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"upperLower2x"}),children:"Upper Lower 2x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:701,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="upperLower3x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"upperLower3x"}),children:"Upper Lower 3x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:716,columnNumber:17},void 0),e.jsxDEV("div",{className:`activity-level-option ${m.userValues.split==="upperLower4x"?"selected":""}`,onClick:()=>S("userValues",{...m.userValues,split:"upperLower4x"}),children:"Upper Lower 4x/week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:731,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:603,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:748,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.userValues.split,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:749,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:747,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:601,columnNumber:13},void 0),s===7&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Choose your rest days!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:761,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:[1,2,3,4,5,6,7].map(N=>e.jsxDEV("div",{className:`activity-level-option ${m.userValues.restDays?.includes(N)?"selected":""} ${m.userValues.restDays?.length>=$[m.userValues.split]&&!m.userValues.restDays.includes(N)?"disabled":""}`,onClick:()=>oe(N),children:N},N,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:764,columnNumber:19},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:762,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:785,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:m.userValues.restDays?.length!==$[m.userValues.split],children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:786,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:784,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:760,columnNumber:13},void 0),s===8&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Have you had any muscle injuries recently?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:801,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:["none","chest","back","triceps","biceps","traps","shoulders","abs","quadriceps","hamstrings","calves","forearm"].map(N=>e.jsxDEV("div",{className:`activity-level-option ${m.userValues.muscleInjuries?.includes(N)?"selected":""}`,onClick:()=>re(N),children:N==="none"?"None":N.charAt(0).toUpperCase()+N.slice(1)},N,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:817,columnNumber:19},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:802,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:834,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.userValues.muscleInjuries?.length,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:835,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:833,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:800,columnNumber:13},void 0),s===9&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Have you had any joint injuries recently?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:848,columnNumber:15},void 0),e.jsxDEV("div",{className:"activity-level-options",children:["none","elbow","wrist","knee","ankle","lower back"].map(N=>e.jsxDEV("div",{className:`activity-level-option ${m.userValues.jointInjuries?.includes(N)?"selected":""}`,onClick:()=>ne(N),children:N==="none"?"None":N.charAt(0).toUpperCase()+N.slice(1)},N,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:852,columnNumber:21},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:849,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:870,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.userValues.jointInjuries?.length,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:871,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:869,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:847,columnNumber:13},void 0),s===10&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"Personal information"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:883,columnNumber:15},void 0),e.jsxDEV("div",{className:"registration-form",children:[e.jsxDEV("input",{type:"text",name:"name",value:m.name,onChange:te,placeholder:"Name",className:"form-input"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:885,columnNumber:17},void 0),e.jsxDEV("input",{type:"text",name:"lastName",value:m.lastName,onChange:te,placeholder:"Last Name",className:"form-input"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:893,columnNumber:17},void 0),e.jsxDEV(Os,{selected:m.date?new Date(m.date):null,onChange:N=>U({...m,date:N}),className:"form-input",placeholderText:"Birth Date",dateFormat:"yyyy-MM-dd",showYearDropdown:!0,showMonthDropdown:!0,dropdownMode:"select",maxDate:new Date,isClearable:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:901,columnNumber:17},void 0),e.jsxDEV("input",{type:"email",name:"email",value:m.email,onChange:te,placeholder:"Email",className:"form-input"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:922,columnNumber:17},void 0),e.jsxDEV("div",{style:{position:"relative"},children:[e.jsxDEV("input",{type:L?"text":"password",name:"password",value:m.password,onChange:te,placeholder:"Password",className:"form-input",style:{paddingRight:"3rem"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:931,columnNumber:19},void 0),e.jsxDEV("button",{type:"button",onClick:q,style:{position:"absolute",right:"0.75rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#555",cursor:"pointer",fontSize:"0.9rem"},children:L?e.jsxDEV(ze,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:955,columnNumber:37},void 0):e.jsxDEV(Me,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:955,columnNumber:54},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:940,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:930,columnNumber:17},void 0),e.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.7rem",textAlign:"left"},children:[e.jsxDEV("input",{type:"checkbox",id:"terms",checked:o,onChange:N=>l(N.target.checked)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:967,columnNumber:19},void 0),e.jsxDEV("label",{htmlFor:"terms",children:["I agree to the"," ",e.jsxDEV("a",{href:"/terms-and-conditions",target:"_blank",rel:"noopener noreferrer",children:"Terms & Conditions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:975,columnNumber:21},void 0)," ","and"," ",e.jsxDEV("a",{href:"/privacy-policy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:983,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:973,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:958,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:884,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:[e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:994,columnNumber:17},void 0),e.jsxDEV("button",{onClick:K,disabled:!m.email||!m.password||!m.date||!m.name||!m.lastName||ie<18||!o,children:"Next"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:995,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:993,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:882,columnNumber:13},void 0),s===11&&e.jsxDEV("div",{className:"slide",children:[e.jsxDEV("h3",{children:"You are ready to create your workout plan!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1015,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1016,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1017,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1018,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1019,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1020,columnNumber:15},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1021,columnNumber:15},void 0),e.jsxDEV("button",{onClick:z,disabled:D,className:"create-button",children:D?"Creating...":"Create"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1022,columnNumber:15},void 0),e.jsxDEV("div",{className:"navigation-buttons",children:e.jsxDEV("button",{onClick:k,children:"Back"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1031,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1030,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:1014,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:294,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:287,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WizardForm.jsx",lineNumber:286,columnNumber:5},void 0)},Mt=V.section`
  .form-title {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--black);
  }
  .form {
    margin: 0rem 1rem 1rem 1rem;
    width: 90%;
    //min-height: 350px; /* Match the Macros container */
    background-color: var(--grey-300);
    border-radius: 16px;
    padding: 20px;
    display: flex; /* Ensure content is centered vertically */
    flex-direction: column;
    justify-content: space-between; /* Distribute content evenly */
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: left;
    row-gap: 1rem;
  }
  .form-input,
  .form-select {
    background-color: transparent;
    border: 1px solid var(--grey-500);
    border-radius: 4px;
    padding: 0.3em;
    font-size: 1rem;
    color: var(--black);
    appearance: none; /* Remove default browser styling for select */
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
  }
  .form-select {
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position: right 0.5em center;
    background-size: 1em;
    padding-right: 2em; /* Space for the arrow */
  }
  .form-btn {
    margin-top: 1rem;
    background-color: #007bff; /* Blue background */
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    font-size: 1rem;
    cursor: pointer;
    width: fit-content;
  }
  .form-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  /* Remove responsive grid layouts since the first design doesn't specify them */
  @media (min-width: 992px) {
    .form-center {
      flex-direction: column; /* Keep as column */
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      flex-direction: column; /* Keep as column */
    }
  }
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
  }
`,Tt={BREAKFAST:"Breakfast",LUNCH:"Lunch",DINNER:"Dinner",SNACK:"Snack",DRINK:"Drink"},It={WEIGHT_LOSS:"Weight Loss",MAINTENANCE:"Maintenance",MUSCLE_GAIN:"Muscle Gain"},Rt=()=>{const{searchValues:i}=Qe(),{search:t,categoryMeal:o,category:l,sort:s}=i,a=$s(),[p,g]=n.useState(o),[v,r]=n.useState(l);return e.jsxDEV(Mt,{children:e.jsxDEV(E,{className:"row",children:[e.jsxDEV(F,{children:e.jsxDEV(fe,{className:"form",children:[e.jsxDEV("h5",{className:"form-title",children:"Search form"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:34,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-center",children:[e.jsxDEV(es,{labelText:"Meal type",name:"categoryMeal",className:"input",list:["all",...Object.values(Tt)],value:p,onChange:c=>{g(c.target.value),a(c.currentTarget.form)}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:45,columnNumber:15},void 0),e.jsxDEV(es,{labelText:"Your goal",name:"category",className:"input",list:["all",...Object.values(It)],value:v,onChange:c=>{r(c.target.value),a(c.currentTarget.form)}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:56,columnNumber:15},void 0),e.jsxDEV(B,{to:"/dashboard/diet/all-meals",className:"btn form-btn delete-btn",onClick:()=>{g("all"),r("all")},children:"Reset Search Values"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:67,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:35,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:33,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:32,columnNumber:9},void 0),e.jsxDEV(F,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:80,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:31,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/SearchContainer.jsx",lineNumber:30,columnNumber:5},void 0)},Ye=n.createContext(),Bt=({proteins:i,carbs:t,fat:o,calories:l})=>{const s=se(),[a,p]=n.useState({meals:[],totalMeals:0,numOfPages:1,currentPage:1}),[g,v]=n.useState({}),[r,c]=n.useState({});n.useEffect(()=>{(async()=>{const f="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",h=Object.fromEntries([...new URLSearchParams(s.search)]);try{const j=await A.get("/calculate-calories-macros/get-meals",{params:h,headers:{"x-api-key":f}}),b=await A.get("/users/current-user",{headers:{"x-api-key":f}}),m=j.data||{meals:[],totalMeals:0,numOfPages:1};p({meals:Array.isArray(m.meals)?m.meals:[],totalMeals:m.totalMeals??m.meals?.length??0,numOfPages:m.numOfPages??1,currentPage:Number(h.page)||1}),v(b.data.user||{}),c(h)}catch(j){console.error("Fetch error:",j?.response?.data||j.message),y.error(j?.response?.data?.msg||"Failed to load data"),p({meals:[],totalMeals:0,numOfPages:1,currentPage:1})}})()},[s.search]);const u=g.macros||{protein:i,carbs:t,fat:o},x=g.currentCalories||l;return e.jsxDEV(dt,{children:e.jsxDEV(Ye.Provider,{value:{data:a,user:g,searchValues:r,userMacros:u,userCalories:x},children:[e.jsxDEV("h2",{children:"Your Diet"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV(E,{className:"link-row",children:[e.jsxDEV(F,{className:"link-col",children:e.jsxDEV(B,{to:"macros",children:e.jsxDEV("p",{children:"Your Macros"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:81,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:79,columnNumber:11},void 0),e.jsxDEV(F,{className:"link-col",children:e.jsxDEV(B,{to:"all-meals",children:e.jsxDEV("p",{children:"All Meals"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:85,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:84,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:78,columnNumber:9},void 0),e.jsxDEV(ue,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:91,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:74,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/FoodPage.jsx",lineNumber:73,columnNumber:5},void 0)},Qe=()=>n.useContext(Ye),fs=n.createContext(),ge=()=>n.useContext(fs),Ot=({children:i})=>{const[t,o]=n.useState(!1),[l,s]=n.useState(!1),[a,p]=n.useState(null);return n.useEffect(()=>{(async()=>{const v="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO";try{const r=await A.get("/users/current-user",{headers:{"x-api-key":v}});p(r.data.user),o(!0)}catch{p(null),o(!1)}finally{s(!0)}})()},[]),e.jsxDEV(fs.Provider,{value:{user:a,setUser:p,isAuthenticated:t,authChecked:l},children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/context/AuthContext.jsx",lineNumber:36,columnNumber:5},void 0)};let We=null;const $t=()=>We,Ns=n.createContext(),ce=()=>n.useContext(Ns),Gt=({children:i})=>{const t="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",[o,l]=n.useState(null),[s,a]=n.useState(null),[p,g]=n.useState(!0),[v,r]=n.useState("loading");n.useState(null);const[c,u]=n.useState(()=>{const b=localStorage.getItem("resumeWorkout");return b?JSON.parse(b):null}),{isAuthenticated:x,authChecked:d,user:f}=ge();n.useEffect(()=>{c?localStorage.setItem("resumeWorkout",JSON.stringify(c)):localStorage.removeItem("resumeWorkout")});const h=b=>{const m=new Date().toDateString(),U=b?.workoutProgram?.[0];if(!U?.weeks?.length)return null;for(const L of U.weeks)for(const w of L.days||[]){const D=new Date(w.date);if(!isNaN(D.getTime())&&D.toDateString()===m)return w}return null},j=async()=>{console.log("Targeted");try{g(!0),r("loading");const m=(await A.get("/generate-custom/workout/get-workout",{headers:{"x-api-key":t}})).data;l(m),We=m._doc?{...m._doc}:{...m};const U=h(m);a(U);const L=m?.workoutProgram?.[0],w=L?.weeks?.length===1&&L.weeks[0]?.isTestWeek;r(w?"test":"ready")}catch(b){console.error("Error fetching workout plan:",b.message),l(null),a(null),We=null,r("ready")}finally{g(!1)}};return n.useEffect(()=>{d&&x&&f&&!o&&j()},[d,x,f,o]),e.jsxDEV(Ns.Provider,{value:{fullWorkoutPlan:o,currentWorkout:s,loading:p,workoutPhase:v,setWorkoutPhase:r,refreshWorkoutPlan:j,resumeState:c,setResumeState:u},children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/context/WorkoutContext.jsx",lineNumber:96,columnNumber:5},void 0)},ss=({week:i,weekNumber:t,days:o=[],workoutId:l,status:s,onClick:a})=>{const p=Q(),[g,v]=n.useState(!1),r=n.useMemo(()=>{const h=new Date;return h.setHours(0,0,0,0),h},[]),c=n.useMemo(()=>o.find(h=>{if(!h.date)return!1;const j=new Date(h.date);return j.setHours(0,0,0,0),j.getTime()===r.getTime()}),[o,r]),u=o.filter(h=>h.finishedType==="completed").length,x=o.length,d=()=>{localStorage.setItem("allDays",JSON.stringify(o)),localStorage.setItem("workoutId",l),p(`week/${i._id}`,{state:{days:o,workoutId:l,currentDay:c,weekNumber:t}})},f=x>0?u/x*100:0;return e.jsxDEV("div",{className:`workout-week-card week-${t} ${g?"hidden":""}`,onClick:a||d,children:[e.jsxDEV("h3",{children:`Week ${t}`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(E,{className:"align-items-center",children:[e.jsxDEV(F,{xs:"auto",children:e.jsxDEV("p",{className:`status-pill ${s}`,children:s==="finished"?"Finished":s==="current"?"Current":"Not Started"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:59,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:58,columnNumber:9},void 0),e.jsxDEV(F,{xs:"auto",children:e.jsxDEV("div",{className:`circle ${s}`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:57,columnNumber:7},void 0),e.jsxDEV("div",{className:"days-completed",children:`${u}/${x} Days Completed`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:72,columnNumber:7},void 0),e.jsxDEV("div",{className:"progress-bar-week",children:e.jsxDEV("div",{className:"progress-fill-week",style:{width:`${f}%`}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:78,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:77,columnNumber:7},void 0),c?e.jsxDEV("div",{className:"current-day-badge",children:[e.jsxDEV("strong",{children:"Current Day:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:88,columnNumber:11},void 0)," ",c.name]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:87,columnNumber:9},void 0):""]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutWeekCard.jsx",lineNumber:49,columnNumber:5},void 0)},je=V.div`
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1rem;
  }
  .option,
  input {
    padding: 1rem;
  }
  .workout-page {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
    padding: 30px;
    background-color: #f4f4f4;
  }
  .workout-page.nested-route {
    background-color: transparent; /* Remove gray background for nested routes */
    padding: 0; /* Remove padding for nested routes */
  }
  p {
    margin-bottom: 0px;
    width: fit-content;
  }
  .weight-question-button {
    padding: 1rem;
    margin: 1rem 1rem 0rem 0rem;
  }
  .weight-question-text p {
    margin-bottom: 1rem;
  }
  .weight-question-text {
    width: 90%;
  }
  .weight-form-col {
    width: 45%;
  }
  .form-input {
    padding: 0.5rem;
    border-radius: 12px;
  }
  .weight-unit-button:hover {
    background-color: var(--purple-500);
  }
  .set-knows-weight.selected {
    background-color: var(--purple-500);
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
  .weight-entry-form {
    margin: 2rem 0rem 2rem 0rem;
    background-color: var(--grey-100);
    padding: 1rem;
    border-radius: 12px;
  }
  .weight-entry-form h4 {
    font-weight: 600;
  }
  .weight-entry-form button {
    margin-right: 1rem;
  }
  .instruction-text-container {
    padding: 1rem;
    background-color: var(--grey-200);
    border-radius: 12px;
    margin: 1rem 0rem 1rem 0rem;
  }
  .instruction-button {
    margin: 1rem 0rem 0.5rem 0rem;
    background-color: var(--purple-200);
  }
  .instruction-button:hover {
    background-color: var(--purple-400);
  }
  .instruction-text {
    width: 80%;
  }
  .enter-weights-button {
    margin: 1rem 0rem 2rem 0rem;
  }
  .weight-summary ul {
    background-color: var(--grey-100);
    padding: 1rem;
    border-radius: 12px;
    width: fit-content;
  }
  .weight-summary button {
    margin-bottom: 4rem;
  }
  .workout-week-card {
    transition: all 0.3s ease;
    cursor: pointer;
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .workout-week-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  .workout-week-card:hover {
    transform: scale(1.03);
    transition: 0.4s;
  }
  .week-finished {
    background-color: #e0f7fa;
  }

  .week-current {
    background-color: #b3e5fc;
  }

  .week-not-started {
    background-color: #4fc3f7;
  }
  .status {
    position: relative;
    bottom: 20%;
    transform: translateY(-20%);
  }
  .week-1 {
    background-color: var(--primary-100);
  }
  .week-2 {
    background-color: var(--primary-200);
  }
  .week-3 {
    background-color: var(--primary-300);
  }
  .week-4 {
    background-color: var(--primary-400);
  }
  .week-5 {
    background-color: var(--primary-500);
  }
  .week-page {
    display: grid;
    gap: 2rem;
    padding: 30px;
    background-color: #f9f9f9;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
  .progress-bar-week {
    margin-top: 1rem;
    width: 100%;
    height: 15px;
    background-color: var(--grey-400);
    border-radius: 12px;
    overflow: hidden;
  }
  .progress-fill-week {
    height: 100%;
    background-color: var(--white);
    width: 30%;
  }
  .status-pill {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
  }

  .status-pill.finished {
    background: #c8e6c9;
    color: #2e7d32;
  }

  .status-pill.current {
    background: #bbdefb;
    color: #1565c0;
  }

  .status-pill.not-started {
    background: #ffcdd2;
    color: #c62828;
  }

  .days-completed {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #555;
  }

  .current-day-badge {
    margin-top: 12px;
    background: #e0f7fa;
    color: #00796b;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.95rem;
    display: inline-block;
  }

  .no-current-day {
    margin-top: 12px;
    color: #999;
    font-size: 0.9rem;
  }
  .day-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    height: 20vh;
    width: 80%;
    max-width: 80%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background-color: var(--primary-100);
  }
  .day-card:hover {
    transform: scale(1.03);
    transition: 0.4s;
  }
  .day-page {
    padding: 30px;
    background-color: #f9f9f9;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
  .rest-day-container {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }

  .rest-day-container h2 {
    color: #2f4f4f;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .rest-day-container p {
    color: #556b2f;
    font-size: 1.2rem;
  }
  .go-back-button {
    width: 20%;
    height: fit-content;
    margin-bottom: 1rem;
  }
  .workout-header {
    font-size: 24px;
    font-weight: bold;
  }

  .workout-exercise {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .sets-reps {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .exercise-item {
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f0f0f0;
  }
  .exercise-header {
    justify-content: center;
    align-items: center;
  }
  .exercise-header h3 {
    margin-bottom: 0px;
  }
  button {
    background-color: var(--primary-300);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--primary-500);
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .col-circle {
    width: fit-content;
  }

  table {
    border-collapse: separate;
    border-spacing: 20px; /* This adds space between cells */
  }

  td {
    border: 1px solid black;
    padding: 1rem; /* This adds space inside the cell */
  }
  .td-button {
    padding: 0px;
    border: none;
  }
  .table-button {
    width: 100%;
    height: 60px;
    border-radius: 0px;
  }
  .progress-bar {
    width: 90%;
    height: 20px;
    background-color: var(--primary-100); /* background of entire bar */
    margin-bottom: 10px;
    border-radius: 16px;
    overflow: hidden;
  }

  .progress-fill {
    width: 90%;
    height: 100%;
    background-color: var(--purple-500); /* color of progress fill */
    border-radius: 16px 0 0 16px; /* round left side */
    transition: width 0.3s ease; /* smooth progress transition */
  }
  .status-text.completed {
    color: green;
    font-weight: 700;
  }
  .status-text.skipped {
    color: orange;
  }
  .status-text.pending {
    color: red;
  }
  .status-text.started {
    color: aqua;
  }

  /* Circle as a separate span */
  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 8px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .circle.completed {
    border: 2px solid green;
  }
  .circle.skipped {
    border: 2px solid orange;
  }
  .circle.pending {
    border: 2px solid red;
  }
  .circle.started {
    border: 2px solid aqua;
  }
  .circle.completed::after {
    content: "✓";
    color: green;
    font-size: 10px;
    position: relative;
    bottom: 70%;
    left: 20%;
    transform: translate(70%, -20%);
    font-weight: 800;
  }
  .row-timer-instruction {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clock-button {
    background-color: transparent;
  }
  .clock-button:hover {
    background-color: transparent;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  .col {
    padding: 0 15px;
    flex: 0 0 auto;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }

  p.finished {
    color: #48bb78; /* Green for finished */
  }

  p.current {
    color: #3b82f6; /* Blue for current */
  }

  p.not-started {
    color: #6b7280; /* Gray for not started */
  }
  .col-circle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .circle.finished {
    background-color: #48bb78;
  }

  .circle.current {
    background-color: #3b82f6;
  }

  .circle.not-started {
    background-color: #6b7280;
  }

  .current-day {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(248, 248, 248); /* Blue for current day */
  }

  .no-current-day {
    font-size: 0.9rem;
    color: rgb(41, 44, 49); /* Gray for no current day */
  }

  .enhanced-day-card {
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    background-color: white;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }

  .enhanced-day-card:hover {
    background-color: #f9f9f9;
    transform: translateY(-4px);
  }

  .day-name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .status-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .status-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .circle {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .day-date {
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 0.85rem;
    color: #999;
  }
  .enhanced-day-card:active {
    background-color: #ececec;
    transform: scale(0.98);
  }
  .current-label {
    font-size: 0.9rem;
    color: var(--primary-400); /* nice green */
    margin-left: 8px;
  }
  .day-name-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .day-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #222; /* dark normal text */
    margin: 0;
  }
  .form-weight {
    background-color: var(--grey-100);
    border-radius: 12px;
    padding: 1rem;
  }
  .button-group-weight {
    margin-bottom: 1rem;
  }
  .set-knows-weight {
    width: fit-content;
    padding: 1rem 2rem 1rem 2rem;
    margin-right: 1rem;
  }

  .weight-knowledge-check {
    background-color: var(--grey-100);
    padding: 0.5rem;
    border-radius: 12px;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .weight-knowledge-check h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .weight-info-text {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .set-knows-weight {
    padding: 0.75rem 1.5rem;
    background-color: #0e7cff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .set-knows-weight:hover {
    background-color: #006fde;
  }

  .info-box {
    background-color: var(--grey-200);
    padding: 1rem 1.25rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .info-box h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #222;
  }

  .info-box ul {
    padding-left: 1.2rem;
    font-size: 0.9rem;
    color: #444;
  }

  .weight-note {
    font-size: 0.85rem;
    color: #888;
    text-align: center;
  }
  .bolder-text {
    font-weight: 600;
    text-decoration: underline;
  }

  .exercise-navigation {
    display: flex;
  }
  .back-button {
    background-color: var(--purple-400);
  }
  @media (max-width: 992px) {
    .col-lg-4,
    .col-lg-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (max-width: 768px) {
    .col-md-4,
    .col-md-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .workout-week-card {
      padding: 15px;
      border-radius: 10px;
      margin-left: 1rem;
    }
    .funit-button {
      width: fit-content;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    .weight-form {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 576px) {
    .col-sm-6 {
      flex: 0 0 100%;
      width: 100%;
    }
    .workout-week-card {
      height: 100%;
    }
    .weight-form-col {
      width: 100%;
    }
  }
  @media (max-width: 415px) {
    .workout-page {
      margin: auto;
    }
    .workout-week-card {
      width: 70%;
    }
    .go-back-button {
      font-size: 12px;
      height: fit-content;
    }
  }
  @media (max-width: 490px) {
    .day-page {
      padding: 0px;
    }
    td,
    th {
      font-size: 12px;
    }
    table {
      border-spacing: 10px;
    }
  }
  @media (max-width: 796px) {
    .go-back-button {
      height: fit-content;
    }
  }
  @media (max-width: 992px) {
    .workout-page {
      margin-bottom: 2rem;
    }
    .week-page {
      margin-bottom: 2rem;
    }
    .day-page {
      margin-bottom: 2rem;
    }
  }
`,Ht=Gs`
  to {
    transform: rotate(360deg);
  }
`,Zt=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Kt=V.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${Ht} 0.8s linear infinite;
`,Ne=({message:i="",icon:t=null,className:o="",circleClassName:l=""})=>e.jsxDEV(Zt,{className:o,children:[e.jsxDEV(Kt,{className:l},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Spinner.jsx",lineNumber:33,columnNumber:5},void 0),e.jsxDEV("div",{style:{marginLeft:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[t&&e.jsxDEV("span",{style:{fontSize:"1.5rem"},children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Spinner.jsx",lineNumber:43,columnNumber:16},void 0),e.jsxDEV("p",{style:{fontSize:"1.1rem",fontWeight:500,marginBottom:"0.5rem"},children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Spinner.jsx",lineNumber:44,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Spinner.jsx",lineNumber:34,columnNumber:5},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/Spinner.jsx",lineNumber:32,columnNumber:3},void 0),_t=()=>{const i=Q(),{authChecked:t,user:o,setUser:l}=ge(),{fullWorkoutPlan:s,loading:a,workoutPhase:p,refreshWorkoutPlan:g,redirectTo:v,setRedirectTo:r,resumeState:c}=ce(),u=s?.workoutProgram?.[0]?._id,{pathname:x}=se(),d="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",f=o?._id,h=o?.areWeightsPutted,j=o?.knowsWeight,b=o?.testWeekStartDate,[m,U]=n.useState(""),[L,w]=n.useState("metric"),[D,Z]=n.useState({benchPress:null,latPulldown:null,barbellRow:null,militaryPress:null,bicepsCurl:null,tricepsPushdown:null,squat:null,romanianDeadlift:null}),[q,$]=n.useState(!1),[Y,oe]=n.useState(!1),[re,ne]=n.useState(!1),[te,S]=n.useState(h||!1),[pe,K]=n.useState(!1),k=x==="/dashboard/workout";n.useEffect(()=>{f&&(async()=>{try{const J=await A.get(`/generate-custom/workout/get-test-weights/${f}`,{headers:{"x-api-key":d,"Content-Type":"application/json"}}),{testWeights:I}=J.data;I&&Z(I)}catch(J){console.error("Error fetching weights:",J)}})()},[f]),n.useEffect(()=>{j===!1&&!b&&!h&&(async()=>{try{const J=new Date;J.setHours(0,0,0,0),await A.put(`/generate-custom/workout/update-test-weights/${f}`,{testWeekStartDate:J.toISOString()},{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO","Content-Type":"application/json"}})}catch(J){console.error("Error setting test week start date:",J)}})()},[j,b,h,f]);const z=new Date;z.setHours(0,0,0,0);const G=b&&Math.floor((z-new Date(b))/(1e3*60*60*24)),_=b&&G>=6;if(!t)return e.jsxDEV(je,{children:e.jsxDEV(Ne,{message:"Loading..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:147,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:146,columnNumber:7},void 0);if(a||p==="loading")return e.jsxDEV(je,{children:e.jsxDEV(Ne,{message:"Loading..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:154,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:153,columnNumber:7},void 0);if(p==="test")return e.jsxDEV(je,{children:e.jsxDEV("p",{className:"loading-message",children:"You're currently in the test phase. Your full workout plan will be generated once you've completed the test week."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:160,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:159,columnNumber:7},void 0);const ie=s?.workoutProgram??[];if(ie.length===0)return e.jsxDEV(je,{children:e.jsxDEV("p",{className:"loading-message",children:"No workout program found."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:171,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:170,columnNumber:7},void 0);const N=O=>{const{name:J,value:I}=O.target;Z(X=>({...X,[J]:I?Number(I):null}))},P=async O=>{O.preventDefault();try{await A.put(`/generate-custom/workout/update-test-weights/${f}`,{testWeights:{...D}},{headers:{"x-api-key":d,"Content-Type":"application/json"}}),$(!1)}catch(J){console.error("Error saving weights:",J)}},C=async O=>{Object.values(D).every(I=>I!==null&&!isNaN(I));let J={...D};L==="imperial"&&(J=Object.fromEntries(Object.entries(D).map(([I,X])=>[I,X?+(X/2.20462).toFixed(1):null])));try{const I={areWeightsPutted:!0,testWeights:null,finalWeights:J};await A.put(`/generate-custom/workout/update-test-weights/${f}`,I,{headers:{"x-api-key":d,"Content-Type":"application/json"}});const X={...J,workoutId:u};await A.post("/generate-custom/workout/weight-exercises",X,{headers:{"x-api-key":d,"Content-Type":"application/json"}}),S(!0),$(!1),y.success("Weights submitted successfully!"),i("/dashboard"),setTimeout(()=>{window.location.reload()},100)}catch(I){console.error("Error during weight submission workflow:",I),y.error("Something went wrong. Please try again.")}},T=async(O,J,I)=>{try{await A.put(`/generate-custom/workout/update-test-weights/${f}`,{knowsWeight:J,hasChosenWeightOption:I},{headers:{"x-api-key":d,"Content-Type":"application/json"}}),l(X=>({...X,knowsWeight:J,hasChosenWeightOption:I})),K(!0)}catch(X){console.error("Error updating knowsWeight:",X)}},R=O=>{if(!O?.days?.length)return"not-started";const J=new Date;J.setHours(0,0,0,0);const I=O.days.map(Fe=>new Date(Fe.date).setHours(0,0,0,0)).filter(Fe=>!isNaN(Fe)),X=Math.min(...I),xs=Math.max(...I);return I.every(Fe=>Fe<J)?"finished":X<=J&&J<=xs?"current":"not-started"},le=()=>e.jsxDEV("div",{className:"weight-form",children:[e.jsxDEV("h3",{children:"Enter Your Starting Weights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:333,columnNumber:7},void 0),e.jsxDEV("h5",{children:"Select your weight metric unit!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:334,columnNumber:7},void 0),e.jsxDEV("div",{className:"button-group-weight",children:[e.jsxDEV("button",{className:`set-knows-weight ${m==="metric"?"selected":""}`,onClick:()=>{w("metric"),U("metric")},children:"KG"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:336,columnNumber:9},void 0),e.jsxDEV("button",{className:`set-knows-weight ${m==="imperial"?"selected":""}`,onClick:()=>{w("imperial"),U("imperial")},children:"LBS"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:345,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:335,columnNumber:7},void 0),e.jsxDEV(fe,{onSubmit:C,className:"form-weight",children:[e.jsxDEV(E,{children:[e.jsxDEV(F,{className:"weight-form-col",children:[e.jsxDEV(M,{type:"number",name:"benchPress",labelText:"Bench Press",value:D.benchPress||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:358,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"latPulldown",labelText:"Lat Pull Down",value:D.latPulldown||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:365,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"barbellRow",labelText:"Barbell Row",value:D.barbellRow||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:372,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"militaryPress",labelText:"Military Press",value:D.militaryPress||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:379,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:357,columnNumber:11},void 0),e.jsxDEV(F,{className:"weight-form-col",children:[e.jsxDEV(M,{type:"number",name:"bicepsCurl",labelText:"Biceps Curl",value:D.bicepsCurl||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:388,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"tricepsPushdown",labelText:"Triceps Push Down",value:D.tricepsPushdown||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:395,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"squat",labelText:"Squat",value:D.squat||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:402,columnNumber:13},void 0),e.jsxDEV(M,{type:"number",name:"romanianDeadlift",labelText:"Romanian Deadlift",value:D.romanianDeadlift||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:409,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:387,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:356,columnNumber:9},void 0),e.jsxDEV("button",{type:"submit",children:"Save"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:418,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:355,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:332,columnNumber:5},void 0),ye=()=>e.jsxDEV("div",{className:"practice-week-section",children:[e.jsxDEV("h3",{children:"7-Day Practice Week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:426,columnNumber:9},void 0),e.jsxDEV("button",{className:"instruction-button",onClick:()=>oe(!Y),children:"Instructions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:427,columnNumber:9},void 0),Y&&e.jsxDEV("div",{className:"instruction-text-container",children:e.jsxDEV("p",{className:"instruction-text",children:"Welcome to your test week! Please complete this phase by using weights that feel comfortable to you, testing all 8 exercises (input the weight you can lift for 10 reps of each exercise), and ensuring you enter all weights by the 7th day so we can accurately adjust your personalized workout plan. Below, click 'Enter Weights' to open the form."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:435,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:434,columnNumber:11},void 0),ie.map(O=>O.weeks.slice(5,6).map(J=>e.jsxDEV(ss,{workoutId:O._id,week:J,weekNumber:6,days:J.days,status:R(J)},J._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:448,columnNumber:13},void 0))),e.jsxDEV(E,{children:[e.jsxDEV(F,{lg:6,md:6,sm:12,children:[e.jsxDEV("button",{onClick:()=>$(!0),className:"enter-weights-button",disabled:te,children:"Enter Weights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:460,columnNumber:13},void 0),q&&e.jsxDEV("div",{className:"weight-entry-form",children:[e.jsxDEV("h4",{children:"Enter Weights for Practice Week"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:469,columnNumber:17},void 0),e.jsxDEV("h5",{children:"Select your weight metric unit!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:470,columnNumber:17},void 0),e.jsxDEV("div",{className:"button-group",children:[e.jsxDEV("button",{className:`set-knows-weight ${m==="metric"?"selected":""}`,onClick:()=>{w("metric"),U("metric")},children:"KG"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:472,columnNumber:19},void 0),e.jsxDEV("button",{className:`set-knows-weight ${m==="imperial"?"selected":""}`,onClick:()=>{w("imperial"),U("imperial")},children:"LBS"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:481,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:471,columnNumber:17},void 0),e.jsxDEV(fe,{onSubmit:_?C:P,className:"form-weight",children:[e.jsxDEV(E,{children:[e.jsxDEV(F,{className:"weight-form-col",children:[e.jsxDEV(M,{type:"number",name:"benchPress",labelText:"Bench Press",value:D.benchPress||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:497,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"latPulldown",labelText:"Lat Pull Down",value:D.latPulldown||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:504,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"barbellRow",labelText:"Barbell Row",value:D.barbellRow||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:511,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"militaryPress",labelText:"Military Press",value:D.militaryPress||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:518,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:496,columnNumber:21},void 0),e.jsxDEV(F,{className:"weight-form-col",children:[e.jsxDEV(M,{type:"number",name:"bicepsCurl",labelText:"Biceps Curl",value:D.bicepsCurl||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:527,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"tricepsPushdown",labelText:"Triceps Push Down",value:D.tricepsPushdown||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:534,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"squat",labelText:"Squat",value:D.squat||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:541,columnNumber:23},void 0),e.jsxDEV(M,{type:"number",name:"romanianDeadlift",labelText:"Romanian Deadlift",value:D.romanianDeadlift||"",onChange:N},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:548,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:526,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:495,columnNumber:19},void 0),e.jsxDEV("button",{type:"submit",disabled:_&&!we,children:_?"Submit Weights":"Save"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:557,columnNumber:19},void 0),e.jsxDEV("button",{onClick:()=>$(!1),children:"Close"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:563,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:491,columnNumber:17},void 0),_&&!we&&e.jsxDEV("p",{className:"text-red-500 text-sm mt-2",children:"Please enter weights for all 8 exercises before submitting."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:568,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:468,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:459,columnNumber:11},void 0),e.jsxDEV(F,{lg:6,md:6,sm:12,children:e.jsxDEV("div",{className:"weight-summary",children:[e.jsxDEV("button",{className:"instruction-button",onClick:()=>ne(!re),children:"Current Entered Weights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:577,columnNumber:15},void 0),re&&e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:["Bench Press:"," ",e.jsxDEV("span",{className:D.benchPress?"text-green-500":"text-red-500",children:D.benchPress||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:587,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:585,columnNumber:19},void 0),e.jsxDEV("li",{children:["Lat Pulldown:"," ",e.jsxDEV("span",{className:D.latPulldown?"text-green-500":"text-red-500",children:D.latPulldown||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:599,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:597,columnNumber:19},void 0),e.jsxDEV("li",{children:["Barbell Row:"," ",e.jsxDEV("span",{className:D.barbellRow?"text-green-500":"text-red-500",children:D.barbellRow||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:611,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:609,columnNumber:19},void 0),e.jsxDEV("li",{children:["Military Press:"," ",e.jsxDEV("span",{className:D.militaryPress?"text-green-500":"text-red-500",children:D.militaryPress||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:623,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:621,columnNumber:19},void 0),e.jsxDEV("li",{children:["Biceps Curl:"," ",e.jsxDEV("span",{className:D.bicepsCurl?"text-green-500":"text-red-500",children:D.bicepsCurl||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:635,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:633,columnNumber:19},void 0),e.jsxDEV("li",{children:["Triceps Pushdown:"," ",e.jsxDEV("span",{className:D.tricepsPushdown?"text-green-500":"text-red-500",children:D.tricepsPushdown||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:647,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:645,columnNumber:19},void 0),e.jsxDEV("li",{children:["Squat:"," ",e.jsxDEV("span",{className:D.squat?"text-green-500":"text-red-500",children:D.squat||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:659,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:657,columnNumber:19},void 0),e.jsxDEV("li",{children:["Romanian Deadlift:"," ",e.jsxDEV("span",{className:D.romanianDeadlift?"text-green-500":"text-red-500",children:D.romanianDeadlift||"Not entered"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:671,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:669,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:584,columnNumber:17},void 0),_&&!we&&e.jsxDEV("p",{className:"text-red-500 text-sm mt-2",children:"All weights must be entered by the 7th day to submit."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:685,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:576,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:575,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:458,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:425,columnNumber:7},void 0),me=()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV("h3",{className:"plan-title",children:"Your Workout Plan"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:699,columnNumber:9},void 0),e.jsxDEV("div",{className:"workout-page",children:ie.map(O=>O.weeks.slice(0,5).map((J,I)=>e.jsxDEV(ss,{workoutId:O._id,week:J,weekNumber:I+1,days:J.days,status:R(J)},J._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:705,columnNumber:17},void 0)))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:700,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:698,columnNumber:7},void 0),we=Object.values(D).every(O=>O!==null&&!isNaN(O));return e.jsxDEV(je,{children:o?.hasChosenWeightOption?o?.areWeightsPutted?e.jsxDEV(e.Fragment,{children:[k&&me(),e.jsxDEV(ue,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:777,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:775,columnNumber:9},void 0):o?.knowsWeight===!0?le():e.jsxDEV(e.Fragment,{children:[k&&ye(),e.jsxDEV(ue,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:786,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:784,columnNumber:9},void 0):e.jsxDEV("div",{className:"weight-knowledge-check",children:[e.jsxDEV("h3",{children:"Do You Know Your Starting Weights?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:734,columnNumber:11},void 0),e.jsxDEV("p",{className:"weight-info-text",children:["Knowing your starting weights helps us create a plan tailored to your current fitness level. Please enter the weight you can lift for"," ",e.jsxDEV("span",{className:"bolder-text",children:"10 repetitions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:738,columnNumber:13},void 0)," of each exercise. If you're unsure, we'll guide you through a simple test week to help you estimate your weights safely."]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:735,columnNumber:11},void 0),e.jsxDEV("div",{className:"button-group",children:[e.jsxDEV("button",{className:"set-knows-weight",onClick:()=>T(o,!0,!0),children:"Yes, I Know My Weights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:744,columnNumber:13},void 0),e.jsxDEV("button",{className:"set-knows-weight",onClick:()=>T(o,!1,!0),children:"No, I Want to Estimate Them"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:750,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:743,columnNumber:11},void 0),e.jsxDEV("div",{className:"info-box",children:[e.jsxDEV("h4",{children:"Why This Matters"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:759,columnNumber:13},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"🚀 Personalized training intensity"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:761,columnNumber:15},void 0),e.jsxDEV("li",{children:"📈 Track progress more accurately"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:762,columnNumber:15},void 0),e.jsxDEV("li",{children:"🛡️ Reduce risk of injury from lifting too heavy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:763,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:760,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:758,columnNumber:11},void 0),e.jsxDEV("p",{className:"weight-note",children:`⚠️ Please choose carefully: Once you select an option, it cannot be changed later. If you're unsure about your weights, we recommend selecting "No" and going through the guided test week.`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:767,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:733,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WorkoutPage.jsx",lineNumber:730,columnNumber:5},void 0)},Ce=V.section`
  .background {
    margin-top: 0px;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    height: fit-content;
  }
  .login-background {
    margin-top: 0px;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    height: 100vh;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .form {
    margin-top: 0px;
    margin-bottom: 0px;
    max-width: 400px;
    width: 90vw;
    background: none;
    box-shadow: none;
  }
  .form-input {
    padding: 5px;
  }
  .login-form {
    margin-top: 0px;
    max-width: 350px;
    background: white;
    padding: 10px;
    margin: auto;
    border-radius: 8px;
  }
  .login-form input {
    background: none;
    margin: 5px 0px 5px 0px;
    padding: 5px;
    font-size: 14px;
    border-radius: 8px;
  }
  h4,
  h2 {
    text-align: center;
    margin-bottom: 1.38rem;
    font-weight: 800;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.38rem;
  }
  .register-text {
    text-align: center;
    color: var(--black);
    font-weight: 800;
  }
  .btn {
    display: block;
    margin-top: 1rem;
    margin: 0 auto;
    background-color: var(--purple-300);
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .member-btn-register {
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .login-heading {
    padding-top: 100px;
  }
  .spinner {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .spinner-circle {
    border-top-color: var(--white);
    width: 60px;
    height: 60px;
  }
  .spinner-wrapper {
    color: var(--white);
  }
`,Yt=async({request:i})=>{const t=await i.formData(),o=Object.fromEntries(t);try{const a=(await A.post("/auth/login",o,{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO","Content-Type":"application/json"}})).data.events||[];return y.success("Login successful"),a.forEach(p=>{switch(p.type){case"xpEarned":y.success(`+${p.amount} XP!`);break;case"badgeUnlocked":y.success(`🏅 New badge: ${p.name}`);break;case"rewardUnlocked":y.info(`🎁 Reward unlocked: ${p.name}`);break}}),Se("/dashboard")}catch(l){return y.error(l?.response?.data?.msg),l}},Qt=()=>{const t=Le().state==="Submitting",[o,l]=n.useState(!1),s=()=>l(a=>!a);return e.jsxDEV(Ce,{children:e.jsxDEV("div",{className:"login-background",children:[e.jsxDEV("div",{className:"register-text",children:e.jsxDEV("h2",{className:"login-heading",children:"Welcome!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:58,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV(fe,{method:"post",className:"login-form",children:[e.jsxDEV("p",{children:["Not a member?",e.jsxDEV(B,{to:"/register",className:"member-btn",children:"Register"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:63,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:61,columnNumber:11},void 0),e.jsxDEV(M,{type:"email",name:"email",placeholder:"example@gmail.com"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:67,columnNumber:11},void 0),e.jsxDEV(M,{type:o?"text":"password",name:"password",placeholder:"secret123",extraElement:e.jsxDEV("button",{type:"button",onClick:s,style:{background:"none",border:"none",padding:0,margin:0,color:"#555"},children:o?e.jsxDEV(ze,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:84,columnNumber:33},void 0):e.jsxDEV(Me,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:84,columnNumber:50},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:73,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:68,columnNumber:11},void 0),e.jsxDEV("p",{style:{marginTop:"0.5rem"},children:e.jsxDEV(B,{to:"/forgot-password",className:"forgot-password-link",children:"Forgot your password?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:89,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:88,columnNumber:11},void 0),e.jsxDEV("button",{type:"submit",className:"btn",disabled:t,children:t?"Submitting":"Submit"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:94,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:60,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:56,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Login.jsx",lineNumber:55,columnNumber:5},void 0)},qt=async()=>null,Xt=()=>{const[i,t]=n.useState({}),[o,l]=n.useState(!1),[s,a]=n.useState(0),[p,g]=n.useState(null),v=Q(),r=[{text:"Creating your account",delay:2e3,icon:e.jsxDEV(Hs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:22,columnNumber:57},void 0)},{text:"Generating your workout plan",delay:5e3,icon:e.jsxDEV(Zs,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:23,columnNumber:64},void 0)},{text:"Calculating your macros",delay:3e3,icon:e.jsxDEV(Ks,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:24,columnNumber:59},void 0)}];n.useEffect(()=>{if(!o)return;const d=setInterval(()=>{a(f=>(f+1)%4)},500);return()=>clearInterval(d)},[o]);const c=d=>{t(f=>({...f,...d}))},u=async()=>{for(const d of r)g(d),await new Promise(f=>setTimeout(f,d.delay))},x=async d=>{const f={...i,...d};t(f);const h="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO";try{l(!0);const j=u(),m=(await A.post("/auth/register",f,{headers:{"x-api-key":h,"Content-Type":"application/json"}}))?.data?.user?._id;if(!m)throw new Error("User ID not returned from registration.");const U={difficultyLevel:f.userValues?.difficultyLevel||"beginner",workoutType:f.userValues?.workoutType||"hypertrophy",splitPreference:f.userValues?.split||"pushPullLegs6x",workoutsPerWeek:f.workoutLevel,equipmentType:f.userValues?.equipment||[],userId:m,restDays:f.userValues?.restDays||[7],startDate:new Date().toISOString(),label:1};await A.post("/generate-custom/workout/",U,{headers:{"x-api-key":h,"Content-Type":"application/json"}});const L={weight:f.userValues?.weight,height:f.userValues.height,age:f.age,gender:f.gender,activityLevel:f.activityLevel,fitnessGoal:f.fitnessGoal,workoutLevel:f.workoutLevel};await A.post(`calculate-calories-macros/calculate/${m}`,L,{headers:{"x-api-key":h,"Content-Type":"application/json"}}),await j,await new Promise(w=>setTimeout(w,1e3)),y.success("Registration successful! Please check your email to verify your account."),v("/login")}catch(j){console.log(j),y.error(j?.response?.data?.msg||"Registration failed")}finally{l(!1)}};return e.jsxDEV(Ce,{children:e.jsxDEV("div",{className:"background",children:o?e.jsxDEV("div",{className:"spinner",children:e.jsxDEV(Ne,{message:p?`${p.text}${".".repeat(s)}`:"Processing...",icon:p?.icon,className:"spinner-wrapper",circleClassName:"spinner-circle"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:137,columnNumber:11},void 0):e.jsxDEV("div",{className:"form",children:[e.jsxDEV("h4",{children:"Create your account!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:151,columnNumber:13},void 0),e.jsxDEV("p",{children:["Already a member?",e.jsxDEV(B,{to:"/login",className:"member-btn-register",children:"Login"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:154,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:152,columnNumber:13},void 0),e.jsxDEV(zt,{onFormDataChange:c,onFinalStep:x,initialData:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:158,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:150,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:135,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Register.jsx",lineNumber:134,columnNumber:5},void 0)},ei=V.section`
  .user-values {
    max-width: 800px;
    padding: 1rem 2rem 1rem 2rem;
    background-color: var(--grey-100);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .form {
    background-color: var(--grey-300);
    max-width: none;
    width: 100%;
  }
  .form-input {
    padding: 5px;
    background-color: var(--white);
    border-radius: 12px;
    padding-left: 8px;
  }
  h5 {
    margin-top: 5px;
  }
  .heading {
    text-align: left;
    color: var(--black);
    margin-bottom: 30px;
  }
  .button {
    background-color: var(--primary-400);
    border: none;
    border-radius: 12px;
    color: var(--white);
    padding: 6px 12px 6px 12px;
  }
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: var(--white);
    padding: 10px;
    border-radius: 12px;
    border: 1px solid var(--grey-400);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--grey-100);
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .checkbox-label input[type="checkbox"] {
    accent-color: var(--primary-400);
  }

  @media (max-width: 756px) {
    .row {
      flex-direction: column;
    }
  }
`,si=async({request:i})=>{const t="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",o=await i.formData(),l=Object.fromEntries(o.entries());l.muscleInjuries=o.getAll("muscleInjuries"),l.jointInjuries=o.getAll("jointInjuries");try{const s=await A.patch("/generate-custom/workout/user-values",l,{headers:{"x-api-key":t,"Content-Type":"application/json"}});y.success("Profile updated successfully")}catch(s){console.error("Error:",s),y.error(s?.response?.data?.message||"Failed to update profile")}return null},ts=()=>{const[i,t]=n.useState(null),[o,l]=n.useState(!0),[s,a]=n.useState(!1),p=()=>a(w=>!w);n.useEffect(()=>{(async()=>{const D="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO";try{const Z=await A.get("/generate-custom/workout/get-workout",{headers:{"x-api-key":D}});t(Z.data.workoutProgram)}catch(Z){console.error("Failed to fetch workout:",Z)}finally{l(!1)}})()},[]);const g=["chest","back","triceps","biceps","traps","shoulders","abs","quadriceps","hamstrings","calves","forearm","none"],v=["elbow","wrist","knee","ankle","lower back","none"],{user:r}=Te(),{name:c,lastName:u,email:x,password:d,date:f,weight:h,height:j,muscleInjuries:b,jointInjuries:m,split:U,utcOffset:L}=r;return e.jsxDEV(ei,{children:[e.jsxDEV("div",{className:"user-values",children:[e.jsxDEV("h2",{children:c+" "+u},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:110,columnNumber:9},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:111,columnNumber:9},void 0),e.jsxDEV("h5",{children:"Total plans completed: 0"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:112,columnNumber:9},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:113,columnNumber:9},void 0),e.jsxDEV("h5",{children:["Current plan ends on:"," ",!o&&i?.[0]?.endDate?new Date(i[0].endDate).toLocaleDateString():"No active plan"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:114,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:109,columnNumber:7},void 0),e.jsxDEV(fe,{method:"post",className:"form",encType:"multipart/form-data",children:[e.jsxDEV("input",{type:"hidden",name:"userId",value:r._id},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV("div",{className:"form-center",children:[e.jsxDEV("h3",{className:"heading",children:"Update Profile"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:124,columnNumber:11},void 0),e.jsxDEV(E,{className:"row",children:[e.jsxDEV(F,{children:[e.jsxDEV(M,{type:"text",name:"name",defaultValue:c},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:127,columnNumber:15},void 0),e.jsxDEV(M,{type:"text",name:"lastName",labelText:"last name",defaultValue:u},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:128,columnNumber:15},void 0),e.jsxDEV(M,{type:"email",name:"email",defaultValue:x},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:134,columnNumber:15},void 0),e.jsxDEV(M,{type:s?"text":"password",name:"password",placeholder:"secret123",extraElement:e.jsxDEV("button",{type:"button",onClick:p,style:{background:"none",border:"none",padding:0,margin:0,color:"#555"},children:s?e.jsxDEV(ze,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:151,columnNumber:37},void 0):e.jsxDEV(Me,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:151,columnNumber:54},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:140,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:135,columnNumber:15},void 0),e.jsxDEV(M,{type:"number",name:"weight",defaultValue:r.userValues.weight},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:155,columnNumber:15},void 0),e.jsxDEV(M,{type:"number",name:"height",defaultValue:r.userValues.height},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:160,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:126,columnNumber:13},void 0),e.jsxDEV(F,{children:[e.jsxDEV("div",{className:"form-row",children:[e.jsxDEV("label",{className:"form-label",children:"Muscle Injuries"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:168,columnNumber:17},void 0),e.jsxDEV("div",{className:"checkbox-group",children:g.map(w=>e.jsxDEV("label",{className:"checkbox-label",children:[e.jsxDEV("input",{type:"checkbox",name:"muscleInjuries",value:w,defaultChecked:r.userValues.muscleInjuries?.includes(w)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:172,columnNumber:23},void 0),w]},w,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:171,columnNumber:21},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:169,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:167,columnNumber:15},void 0),e.jsxDEV("div",{className:"form-row",children:[e.jsxDEV("label",{className:"form-label",children:"Joint Injuries"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:187,columnNumber:17},void 0),e.jsxDEV("div",{className:"checkbox-group",children:v.map(w=>e.jsxDEV("label",{className:"checkbox-label",children:[e.jsxDEV("input",{type:"checkbox",name:"jointInjuries",value:w,defaultChecked:r.userValues.jointInjuries?.includes(w)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:191,columnNumber:23},void 0),w]},w,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:190,columnNumber:21},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:188,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:186,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:166,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:125,columnNumber:11},void 0),e.jsxDEV(St,{formBtn:!0,className:"button"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:206,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:123,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:121,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Profile.jsx",lineNumber:108,columnNumber:5},void 0)},is=V.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--black);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,ti="/assets/not-found-o2LH7SOx.svg",ii=()=>_s().status===404?e.jsxDEV(is,{children:e.jsxDEV("div",{children:[e.jsxDEV("img",{src:ti,alt:"not found"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:12,columnNumber:11},void 0),e.jsxDEV("h3",{children:"Page not Found"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:13,columnNumber:11},void 0),e.jsxDEV("p",{children:"can't find the page"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:14,columnNumber:11},void 0),e.jsxDEV(B,{to:"/",children:"back home"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:15,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:11,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:10,columnNumber:7},void 0):e.jsxDEV(is,{children:e.jsxDEV("div",{children:e.jsxDEV("h3",{children:"Something went wrong"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:23,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/Error.jsx",lineNumber:21,columnNumber:5},void 0),oi=V.section`
  body {
    overflow-x: hidden;
  }
  .section-one {
    max-width: 100%;
    margin: auto;
    margin-bottom: 100px;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    padding: 15px;
    height: 95vh;
    --bs-gutter-x: none;
  }
  .main-row {
    margin: 0 auto;
  }

  .text-headings h1 {
    font-weight: bold;
    color: var(--black);
    font-size: 96px;
    animation: slideInLeft 1.5s ease-in-out forwards;
    transform: translateZ(0);
  }
  .first-text {
    color: var(--white);
    position: relative;
    transform: translate(50%, -50%);
    text-shadow: var(--shadow-4);
  }
  .first-text p {
    animation: slideInRight 1.5s ease-in-out forwards;
  }
  .da {
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .rowAppLinks {
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
    color: var(--black);
  }
  .appLinks {
    width: 100%;
  }
  .svg-icons {
    width: 30px;
    position: relative;
    transform: translate(0, 50%);
  }
  .container-link-to-app {
    position: relative;
    transform: translate(-100%, 70%);
    background-color: var(--white);
    border-radius: 6px;
    text-align: center; /* horizontal fallback */
    width: 220px;
    height: 65px;
    margin-right: 200px;

    /* Center content */
    display: flex;
    align-items: center; /* vertical center */
    justify-content: center; /* horizontal center */
  }

  .appLinksText {
    line-height: 0;
    position: relative;
    top: 50%;
    transform: translate(28%, -40%);
  }
  .login-text {
    color: var(--purple-500);
    font-weight: 600;
  }
  .register-text {
    color: var(--black);
    font-weight: 600;
  }
  h5 {
    font-weight: 600;
  }
  .phoneImage {
    width: 260px;
    position: relative;
    top: 20%;
    left: 15%;
    transform: translate(-30%, -30%);
  }
  .section-two {
    background-color: var(--white);
    max-width: 800px;
    margin: auto;
    --bs-gutter-x: none;
    text-align: center;
  }
  .section-two h1 {
    font-weight: 600;
    font-size: 48px;
  }
  .section-two-rows-left {
    margin-top: 20px;
    flex-direction: row;
  }
  .section-two-right {
    text-align: left;
  }
  .section-two-left {
    text-align: right;
  }
  .section-two-right svg {
    position: relative;
    margin-bottom: 30px;
    top: 100%;
    transform: translate(0, 100%);
  }
  .section-two-left svg {
    position: relative;
    margin-bottom: 30px;
    top: 100%;
    transform: translate(0, 100%);
  }
  .section-two-text {
    max-width: 350px;
    // text-align: justify;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    line-height: 1.5;
    // position: absolute;
    top: 100%;
  }
  .section-two-text h3 {
    line-height: 42px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 36px;
  }
  .section-two-heading {
    margin-bottom: 20px;
  }
  .section-two-images {
    width: 350px;
    border-radius: 20px;
  }
  .mid-section {
    background-image: linear-gradient(
      155deg,
      var(--primary-400) 20%,
      var(--purple-300) 100%
    );
    text-align: center;
    color: var(--white);
    height: 30vh;
    width: 100%;
    margin: auto;
    margin-top: 60px;
  }
  .mid-section h2 {
    font-size: 48px;
    font-weight: 500;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .mid-section p {
    font-size: 28px;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
  }
  .section-three {
    background-color: var(--white);
    max-width: 900px;
    margin: auto;
    --bs-gutter-x: none;
    text-align: center;
  }
  .section-three h1 {
    font-size: 48px;
    font-weight: 600;
    margin-top: 50px;
  }
  .pricing-packages {
    max-width: 100%;
    text-align: left;
    margin: auto;
    margin-bottom: 25rem;
  }
  .pricing-packages-columns {
    margin: 2px;
    padding: 0px 30px 0px 30px;
    height: 50vh;
  }
  .pricing-packages p {
    font-size: 16px;
  }
  .pricing-packages-upper-row {
    background-color: var(--primary-10);
    padding: 10px;
    border-radius: 8px 8px 0px 0px;
  }
  .pricing-packages-lower-row {
    background-color: var(--primary-15);
    padding: 10px;
    border-radius: 0px 0px 8px 8px;
  }
  .pricing-packages-lower-row h5 {
    margin-bottom: 5px;
  }
  .dot-one {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-25);
    border-radius: 50%;
  }
  .dot-two {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-100);
    border-radius: 50%;
  }
  .dot-three {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-500);
    border-radius: 50%;
  }
  .pricing-button {
    background-color: var(--primary-10);
    border-color: var(--gray-50);
    margin: 10px 0px 10px 0px;
  }
  .pricing-button-premium {
    background-color: var(--purple-500);
  }
  .pricing-button-text-white {
    color: var(--white);
  }
  .pricing-button-text-black {
    color: var(--black);
  }
  .pricing-button p {
    margin-bottom: 0;
    font-weight: 500;
  }
  .highlighted-text-one {
    font-size: 22px;
    font-weight: 550;
  }
  .highlighted-text-two {
    font-size: 18px;
    font-weight: 550;
  }
  .highlighted-text-free {
    font-size: 18px;
    font-weight: 550;
  }
  .right-animation {
    animation: slideInLeft 1s ease-in-out forwards;
  }
  .left-animation {
    animation: slideInRight 1s ease-in-out forwards;
  }

  .original-price {
    text-decoration: line-through;
    color: #888;
    margin-right: 8px;
    font-weight: 500;
  }

  .currently-free {
    color: #28a745;
    font-weight: 600;
    font-size: 1rem;
  }

  .currently-free {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slideInLeft {
    from {
      transform-origin: left;
      transform: translateX(-10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform-origin: left;
      transform: translateX(10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromLeft {
    from {
      transform-origin: left;
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      transform-origin: left;
      opacity: 0;
      transform: translateX(10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .image-slide-right {
    animation: slideInFromRight 1s ease-in-out forwards;
  }

  .image-slide-left {
    animation: slideInFromLeft 1s ease-in-out forwards;
  }

  .text-slide-left {
    animation: slideInFromLeft 1s ease-in-out forwards;
  }

  .text-slide-right {
    animation: slideInFromRight 1s ease-in-out forwards;
  }
  @media (max-width: 992px) {
    .section-one {
      padding: 0;
      margin: 0 auto;
      height: 120vh;
      margin-bottom: 50px;
    }
    .da {
      height: 25vh;
      flex-direction: column;
      flex-wrap: nowrap;
      max-width: 800px;
      text-align: center;
      margin: auto;
    }
    .rowAppLinks {
      margin-bottom: 150px;
    }
    .container-link-to-app {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 200px;
      height: 65px;
      margin: auto;
    }
    .phoneImage {
      width: 290px;
      position: relative;
      top: 50%;
      left: 18.5%;
      transform: translate(-50%, -30%);
    }
    .text-headings h1 {
      font-weight: bold;
      color: var(--black);
      font-size: 70px;
    }

    .first-text {
      margin: auto;
      text-align: center;
      top: 0;
      left: 0;
      position: relative;
      transform: translate(0, 0);
    }
    .section-two {
      background-color: var(--white);
      max-width: 750px;
      margin: auto;
      --bs-gutter-x: none;
      text-align: center;
    }
    .section-two-right {
      text-align: center;
    }
    .section-two-left {
      text-align: center;
    }
    .section-two-rows svg {
      max-width: 280px;
    }
    .section-two-text {
      max-width: 280px;
    }
    .section-two-images {
      width: 280px;
      border-radius: 20px;
    }
    .mid-section h2 {
      font-size: 40px;
      line-break: loose;
    }
    .mid-section p {
      font-size: 20px;
    }
    .pricing-packages {
      max-width: 550px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 768px) {
    .rowAppLinks {
      margin-bottom: 50px;
    }
    .section-one {
      max-width: 100%;
      margin: auto;
      margin-bottom: 40px;
      padding: 15px;
      height: 120vh;
      --bs-gutter-x: none;
    }
    .phoneImage {
      width: 255px;
      position: relative;
      top: 0%;
      left: 0%;
      transform: translate(-0%, -0%);
    }
    .first-text {
      margin-bottom: 20px;
    }
    .text-headings h1 {
      font-size: 56px;
      margin-top: 20px;
    }
    .rowAppLinks {
      width: 100%; /* Ensure the parent container takes full width */
      display: flex; /* Enable flexbox layout */
      justify-content: center; /* Center children horizontally */
      align-items: center; /* Center children vertically if needed */
      flex-direction: column; /* Stack children vertically */
    }
    .container-link-to-app {
      position: relative;
      top: 65%;
      left: 65%;
      transform: translate(-65%, -65%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 170px;
      height: 50px;
      margin: 5px;
    }
    .container-link-to-app p {
      font-size: 13px;
    }
    .container-link-to-app h5 {
      font-size: 16px;
    }
    .svg-icons {
      width: 25px;
      position: relative;
      transform: translate(0, 50%);
    }
    p {
      margin-bottom: 0.5rem;
    }
    .section-two-rows-left {
      margin: auto;
    }
    .section-two-rows-right {
      margin: auto;
    }
    .section-two-text {
      max-width: 240px;
    }
    .section-two-images {
      width: 240px;
      border-radius: 20px;
    }
    .section-two-text {
      position: relative;
      top: 1%;
      transform: translate(0, -1%);
    }
    .pricing-packages {
      max-width: 400px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 575px) {
    .section-one {
      max-width: 100%;
      margin: auto;
      margin-bottom: 40px;
      background-color: var(--primary-200);
      padding: 15px;
      height: 100vh;
      --bs-gutter-x: none;
    }
    .da {
      height: 20vh;
      position: relative;
      padding: 15px;
    }
    .phoneImage {
      width: 180px;
    }
    .first-text {
      margin-top: 0px;
    }
    .text-headings h1 {
      margin-top: 20px;
    }
    .rowAppLinks {
      margin-bottom: 50px;
    }
    .container-link-to-app {
      position: relative;
      top: 15%;
      left: 15%;
      transform: translate(-15%, -15%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 160px;
      height: 50px;
      margin: 5px;
    }
    p {
      margin-bottom: 0.5rem;
    }
    .phoneImage {
      position: relative;
      top: 2%;
      left: 2%;
      transform: translate(-2%, -2%);
    }

    .section-two-rows {
      margin: auto;
    }
    .section-two-rows-left {
      display: flex;
      flex-direction: column-reverse;
    }
    .section-two-rows-right {
      display: flex;
      flex-direction: column;
    }
    .section-two-text {
      max-width: 240px;
      margin: auto;
      /* position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);*/
      margin-bottom: 20px;
    }
    .section-two-images {
      position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
    }
    .section-two-rows {
      flex-direction: column;
    }
    .section-two-left {
      flex-direction: column-reverse;
    }
    .section-two-left svg {
      position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
      width: 60px;
      margin-top: 20px;
    }
    .section-two-right svg {
      position: relative;
      text-align: left;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
      width: 60px;
      margin-top: 20px;
    }
    .section-two-right {
      text-align: center;
      padding-top: 0;
      margin-top: 0;
    }
    .section-two-left {
      text-align: center;
    }
    .section-two-rows .section-two-text {
      order: 1;
    }
    .section-two-rows .section-two-images {
      order: 2;
    }
    .pricing-packages {
      max-width: 350px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .ticks {
      max-width: min-content;
    }
    .words {
      max-width: max-content;
    }
  }
  @media (max-width: 450px) {
    .phoneImage {
      width: 180px;
      position: relative;
      top: 2%;
      left: 2%;
      transform: translate(-2%, -2%);
    }
    .text-headings h1 {
      font-size: 48px;
      margin-top: 20px;
    }
  }
`,ri="/assets/phoneImage-BEbCKIqj.png",ni="/assets/fitnessImage-D8WcEbWZ.jpg",li="/assets/progress-D7mTXm53.png",ai="/assets/dietImage-CZviNxKE.jpg",os=({dotClass:i,title:t,description:o,priceMonthly:l,priceAnnually:s,buttonColor:a,pricingButtonText:p,includedItems:g})=>{const v=()=>{const r=document.getElementById("section-newsletter");r&&r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})};return e.jsxDEV(F,{className:"pricing-packages-columns",children:[e.jsxDEV(E,{className:"pricing-packages-upper-row",children:[e.jsxDEV("span",{className:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:30,columnNumber:9},void 0),e.jsxDEV("h4",{className:"highlighted-text-one",children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:31,columnNumber:9},void 0),e.jsxDEV("p",{children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:32,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:29,columnNumber:7},void 0),e.jsxDEV(E,{className:"pricing-packages-lower-row",children:[e.jsxDEV("p",{className:"premium-price-text",children:[e.jsxDEV("span",{className:"original-price",children:[l," per month billed annually or ",s," billed monthly"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:36,columnNumber:11},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:40,columnNumber:11},void 0),e.jsxDEV("span",{className:"currently-free",children:["Currently ",e.jsxDEV("strong",{children:"Free"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:42,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:41,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:35,columnNumber:9},void 0),e.jsxDEV(ae,{variant:"secondary",className:`pricing-button ${a}`,onClick:v,children:e.jsxDEV(B,{to:"/register",children:e.jsxDEV("p",{className:p,children:"Get Started"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:52,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:51,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:46,columnNumber:9},void 0),e.jsxDEV("h5",{children:"What's included"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:55,columnNumber:9},void 0),g.map((r,c)=>e.jsxDEV(E,{className:"offers",children:[e.jsxDEV(F,{md:1,sm:1,lg:1,className:"ticks",children:e.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16px",height:"16px",children:e.jsxDEV("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:65,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:59,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:58,columnNumber:13},void 0),e.jsxDEV(F,{md:11,sm:11,lg:11,className:"words",children:e.jsxDEV("p",{children:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:69,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:68,columnNumber:13},void 0)]},c,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:57,columnNumber:11},void 0))]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:34,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/pricingComponent.jsx",lineNumber:28,columnNumber:5},void 0)},ci=V.section`
  .button {
    background-color: var(--purple-500);
    color: white;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
      background-color: var(--purple-700);
      transform: scale(1.05);
    }
  }

  .container {
    background-color: var(--grey-200);
    max-width: 80%;
    margin-bottom: 50px;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: transform 0.3s ease-in-out;
  }

  input:focus {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
  }

  .p-4 {
    box-shadow: none;
  }

  .mt-3 {
    border: none;
  }
`,pi=()=>{const[i,t]=n.useState(""),[o,l]=n.useState(""),[s,a]=n.useState(""),[p,g]=n.useState(!1),{ref:v,inView:r}=Ys({triggerOnce:!0,threshold:.1}),c=Ee({opacity:o||s?1:0,transform:o||s?"translateY(0)":"translateY(10px)",config:{tension:170,friction:26}}),u=Ee({transform:p?"scale(1.05)":"scale(1)",config:{tension:300,friction:10}}),x=Ee({opacity:r?1:0,transform:r?"translateY(0)":"translateY(50px)",config:{tension:170,friction:20}}),d=h=>{t(h.target.value)},f=async h=>{h.preventDefault(),l(""),a("");try{const j=await rs.post("/signup",{email:i});l(j.data),t("")}catch(j){console.error("Error response:",j.response),a(j.response&&j.response.data?j.response.data:"An error occurred")}};return e.jsxDEV(ci,{id:"section-newsletter",children:[" ",e.jsxDEV(Ae.div,{style:x,ref:v,children:e.jsxDEV(Qs,{className:"text-center text-lg-left mt-4 container",children:e.jsxDEV(ve,{className:"p-4",children:[e.jsxDEV("form",{onSubmit:f,children:e.jsxDEV(E,{className:"d-flex justify-content-center",children:[e.jsxDEV(F,{size:"auto",className:"mb-4 mb-md-0",children:e.jsxDEV("p",{children:e.jsxDEV("strong",{children:"Sign up and be amongst the first ones!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:74,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:73,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(F,{md:"5",size:"12",className:"mb-4 mb-md-0",children:e.jsxDEV(H.Control,{type:"email",placeholder:"name@example.com",value:i,onChange:d,required:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:78,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:77,columnNumber:17},void 0),e.jsxDEV(F,{size:"auto",className:"mb-4 mb-md-0",children:e.jsxDEV(Ae.div,{style:u,children:e.jsxDEV(ae,{type:"submit",className:"button",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:"Subscribe"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:88,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:87,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:86,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:71,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:70,columnNumber:13},void 0),e.jsxDEV(Ae.div,{style:c,children:[o&&e.jsxDEV(qe,{variant:"success",className:"mt-3",children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:102,columnNumber:17},void 0),s&&e.jsxDEV(qe,{variant:"danger",className:"mt-3",children:s},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:107,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:100,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:69,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:68,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/newsletterForm.jsx",lineNumber:64,columnNumber:5},void 0)},mi=V.section`
  .animation-element {
    max-width: 350px;
    // text-align: justify;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    line-height: 1.5;
    position: relative;
    top: 25%;
    transform: translate(0, -25%);
  }
`,be=({children:i,animationClass:t})=>{const o=n.useRef();return n.useEffect(()=>{const l=new IntersectionObserver(([a])=>{a.isIntersecting&&(a.target.classList.add(t),l.unobserve(a.target))},{threshold:.1}),s=o.current;return s&&l.observe(s),()=>{s&&l.unobserve(s)}},[t]),e.jsxDEV(mi,{children:e.jsxDEV("div",{ref:o,className:"animated-element",children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/AnimationScroll.jsx",lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/AnimationScroll.jsx",lineNumber:33,columnNumber:5},void 0)},di=()=>e.jsxDEV(oi,{children:[e.jsxDEV(ht,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:19,columnNumber:7},void 0),e.jsxDEV(E,{className:"section-one",id:"section-one",children:e.jsxDEV(E,{className:"main-row",children:[e.jsxDEV(F,{md:12,sm:7,lg:6,className:"da",children:[e.jsxDEV(E,{children:e.jsxDEV("div",{className:"first-text",children:[e.jsxDEV("div",{className:"text-headings",children:e.jsxDEV("h1",{children:"FITTEST."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:26,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:25,columnNumber:17},void 0),e.jsxDEV("p",{children:"Customized workouts personalized for you including meals & recipes"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:28,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:24,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:23,columnNumber:13},void 0),e.jsxDEV(E,{children:e.jsxDEV("div",{className:"appLinks",children:e.jsxDEV(E,{className:"rowAppLinks",children:[e.jsxDEV(F,{md:6,sm:6,lg:6,children:e.jsxDEV(ve,{className:"container-link-to-app",children:e.jsxDEV(B,{to:"/register",children:e.jsxDEV("h4",{className:"register-text",children:"Register"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:61,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:60,columnNumber:23},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:38,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:37,columnNumber:19},void 0),e.jsxDEV(F,{md:6,sm:6,lg:6,children:e.jsxDEV(ve,{className:"container-link-to-app",children:e.jsxDEV(B,{to:"/login",children:e.jsxDEV("h4",{className:"login-text",children:"Login"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:111,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:110,columnNumber:23},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:66,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:65,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:36,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:35,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:34,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:22,columnNumber:11},void 0),e.jsxDEV(F,{md:12,sm:12,lg:6,className:"da",children:e.jsxDEV("img",{src:ri,className:"phoneImage",alt:"Phone image",loading:"lazy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:120,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:119,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:21,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:20,columnNumber:7},void 0),e.jsxDEV(E,{className:"section-two",id:"section-two",children:[e.jsxDEV("h1",{className:"section-two-heading",children:"How it works"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:131,columnNumber:9},void 0),e.jsxDEV(E,{className:"section-two-rows-left",children:[e.jsxDEV(F,{children:[e.jsxDEV(be,{animationClass:"right-animation"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:134,columnNumber:13},void 0),e.jsxDEV("img",{src:ni,className:"section-two-images",alt:"Fitness Image",loading:"lazy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:133,columnNumber:11},void 0),e.jsxDEV(F,{className:"section-two-right",children:e.jsxDEV(be,{animationClass:"left-animation",children:[e.jsxDEV("svg",{fill:"#007bff",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"70px",height:"70px",viewBox:"0 0 485.535 485.535","xml:space":"preserve",stroke:"#007bff",children:[e.jsxDEV("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:156,columnNumber:17},void 0),e.jsxDEV("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:158,columnNumber:17},void 0),e.jsxDEV("g",{id:"SVGRepo_iconCarrier",children:[" ",e.jsxDEV("g",{children:[" ",e.jsxDEV("g",{id:"_x35__13_",children:[" ",e.jsxDEV("g",{children:[" ",e.jsxDEV("path",{d:"M55.465,123.228c-15.547,0-28.159,12.608-28.159,28.161v56.673C11.653,211.908,0,225.928,0,242.765 c0,16.842,11.652,30.861,27.306,34.707v56.666c0,15.555,12.612,28.16,28.159,28.16c15.546,0,28.16-12.605,28.16-28.16V151.389 C83.625,135.837,71.011,123.228,55.465,123.228z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:172,columnNumber:25},void 0)," ",e.jsxDEV("path",{d:"M334.498,65.278c-23.092,0-41.811,18.719-41.811,41.812v93.864h-12.801h-60.585h-19.625l-6.827-0.163V107.09 c0-23.092-18.72-41.812-41.813-41.812c-23.091,0-41.812,18.719-41.812,41.812v271.355c0,23.093,18.721,41.812,41.812,41.812 c23.094,0,41.813-18.719,41.813-41.812v-93.653c0,0,4.501-0.211,6.827-0.211h19.625h60.585h12.801v93.864 c0,23.093,18.719,41.812,41.811,41.812c23.094,0,41.812-18.719,41.812-41.812V107.089 C376.311,83.998,357.592,65.278,334.498,65.278z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:173,columnNumber:25},void 0)," ",e.jsxDEV("path",{d:"M458.229,208.062v-56.673c0-15.552-12.613-28.161-28.158-28.161c-15.547,0-28.16,12.608-28.16,28.161v182.749 c0,15.555,12.613,28.16,28.16,28.16c15.545,0,28.158-12.605,28.158-28.16v-56.666c15.654-3.846,27.307-17.865,27.307-34.707 C485.535,225.927,473.883,211.908,458.229,208.062z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:174,columnNumber:25},void 0)," "]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:170,columnNumber:23},void 0)," "]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:168,columnNumber:21},void 0)," "]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:166,columnNumber:19},void 0)," "]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:164,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:144,columnNumber:15},void 0),e.jsxDEV("div",{className:"section-two-text",children:[e.jsxDEV("h4",{children:"Personalized workout plan"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:181,columnNumber:17},void 0),e.jsxDEV("p",{children:"Personalized workout plans tailored through advanced algorithm."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:182,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:180,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:143,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:142,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:132,columnNumber:9},void 0),e.jsxDEV(E,{className:"section-two-rows-right",children:[e.jsxDEV(F,{className:"section-two-left",children:e.jsxDEV(be,{animationClass:"right-animation",children:[e.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#007bff",width:"70px",height:"70px",children:e.jsxDEV("path",{d:"M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:200,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:193,columnNumber:15},void 0),e.jsxDEV("div",{className:"section-two-text",children:[e.jsxDEV("h4",{children:"Food & nutrition"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:203,columnNumber:17},void 0),e.jsxDEV("p",{children:"Access to a variety of meal recipes and nutritional recommendations."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:204,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:202,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:192,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:191,columnNumber:11},void 0),e.jsxDEV(F,{children:[e.jsxDEV(be,{animationClass:"left-animation"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:212,columnNumber:13},void 0),e.jsxDEV("img",{src:ai,className:"section-two-images",alt:"Diet Image",loading:"lazy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:213,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:211,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:190,columnNumber:9},void 0),e.jsxDEV(E,{className:"section-two-rows-left",children:[e.jsxDEV(F,{children:[e.jsxDEV(be,{animationClass:"right-animation"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:223,columnNumber:13},void 0),e.jsxDEV("img",{src:li,className:"section-two-images",alt:"Progress Image",loading:"lazy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:224,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:222,columnNumber:11},void 0),e.jsxDEV(F,{className:"section-two-right",children:e.jsxDEV(be,{animationClass:"left-animation",children:[e.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#007bff",width:"70px",height:"70px",children:e.jsxDEV("path",{d:"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:240,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:233,columnNumber:15},void 0),e.jsxDEV("div",{className:"section-two-text",children:[e.jsxDEV("h4",{children:"Progress tracking"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:243,columnNumber:17},void 0),e.jsxDEV("p",{children:"Set goals, track workouts, log meals, and see progress in real-time."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:244,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:242,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:232,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:231,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:221,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:130,columnNumber:7},void 0),e.jsxDEV(E,{className:"section-three",id:"section-three",children:[e.jsxDEV("h1",{className:"section-two-heading",children:"Pricing and packages"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:255,columnNumber:9},void 0),e.jsxDEV(E,{className:"pricing-packages",children:[e.jsxDEV(os,{dotClass:"dot-one",title:"Basic",description:"For people who want to get in touch with fitness",priceMonthly:"Free",pricingButtonText:"pricing-button-text-black",includedItems:["1 month workout plan","Meal suggestion","1 newsletter per week","Exercise access","4 pre-made splits"]},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:257,columnNumber:11},void 0),e.jsxDEV(os,{dotClass:"dot-three",title:"Premium",description:"For people who want the best fitness experience",priceMonthly:"$15",priceAnnually:"$20",buttonColor:"pricing-button-premium",pricingButtonText:"pricing-button-text-white",includedItems:["All from free","Weight algorithm","Progress tracking","10+ pre-made splits","Calculated macros","Calculated calories","Meals access","Meal suggestion","Changing exercises"]},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:271,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:256,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:254,columnNumber:7},void 0),e.jsxDEV(E,{className:"section-four",id:"section-four"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:293,columnNumber:7},void 0),e.jsxDEV(ds,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:294,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/LandingPage.jsx",lineNumber:18,columnNumber:5},void 0),ui=()=>e.jsxDEV("h1",{children:"HealthPage"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/HealthPage.jsx",lineNumber:4,columnNumber:10},void 0),Ve=V.div`
  .progress-box {
    background: #fff;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    width: 90%;
  }

  .progress-box:hover {
    transform: translateY(-5px);
  }

  .progress-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .progress-bar-custom {
    height: 1.2rem;
    border-radius: 10px;
    background-color: var(--grey-200);
  }

  .progress-bar-custom .progress-bar {
    background-color: var(--primary-500);
    font-size: 0.7rem;
    font-weight: 500;
  }
  .percentage {
    text-align: right;
    font-weight: bold;
  }
  h3 {
    margin: 30px 0px 15px 0px;
    margin-left: 1rem;
  }
  .image-box {
    width: 95%;
    display: flex;
  }
  .image-box-col {
    width: fit-content;
  }
  .images {
    width: 100%;
    border-radius: 8px;
    opacity: 0.8;
    object-fit: cover;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
  }
  .on-image-text {
    position: relative;
    bottom: 15%;
    margin: auto;
  }
  .on-image-text .col {
    width: fit-content;
    background-color: white;
    border-radius: 16px;
    margin: 0px 12px 0px 12px;
    padding: 5px 10px 5px 10px;
    text-align: center;
  }
  @media (max-width: 756px) {
    .progress-box {
      width: 90%;
      margin: auto;
    }
    .image-box {
      margin: auto;
      flex-direction: column;
    }
    .on-image-text {
      position: relative;
      bottom: 100%;
      transform: translateY(-100%);
      margin-bottom: 1rem;
    }
  }
`,vi=()=>{const{user:i,authChecked:t}=ge(),{currentWorkout:o,fullWorkoutPlan:l,loading:s,refreshWorkoutPlan:a}=ce(),[p,g]=n.useState(!1);if(n.useEffect(()=>{if(!i?._id)return;const u=new Date().toDateString();if(localStorage.getItem("lastDailyLogin")===u)return;(async()=>{try{const f="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{data:h}=await A.post(`/gamification/daily-login/${i._id}`,{},{headers:{"x-api-key":f,"Content-Type":"application/json"}});h.message==="Daily login rewarded"?(y.success("You earned 10xp! 🔥"),localStorage.setItem("lastDailyLogin",u)):y.info(h.message)}catch(f){y.error(f?.response?.data?.message||"Daily login failed!")}})()},[i]),n.useEffect(()=>{if(!s){g(!1);return}const u=setTimeout(()=>g(!0),3e3);return()=>clearTimeout(u)},[s]),!t)return e.jsxDEV(Ve,{children:e.jsxDEV(Ne,{message:"Checking user authentication..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:65,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:64,columnNumber:7},void 0);if(i||window.location.reload(),s||!l)return e.jsxDEV(Ve,{children:[e.jsxDEV(Ne,{message:"Loading your workout plan..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:77,columnNumber:9},void 0),p&&e.jsxDEV("div",{className:"mt-3 text-center",children:e.jsxDEV(ae,{variant:"secondary",onClick:a,children:"Refresh"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:80,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:79,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:76,columnNumber:7},void 0);const v=()=>{if(!l?.workoutProgram?.[0]?.weeks)return{totalWorkouts:0,completedWorkouts:0,workoutsLeft:0,percentage:0};const u=l.workoutProgram[0].weeks.flatMap(j=>j.days),x=u.filter(j=>j.type==="workout").length,d=u.filter(j=>j.type==="workout"&&j.isFinished&&j.finishedType==="completed").length,f=x-d,h=x?Math.round(d/x*100):0;return{totalWorkouts:x,completedWorkouts:d,workoutsLeft:f,percentage:h}},{workoutsLeft:r,percentage:c}=v();return e.jsxDEV(Ve,{children:[e.jsxDEV(E,{className:"progress-box mb-4",children:e.jsxDEV(F,{xs:12,sm:8,className:"progress-box-col",children:[e.jsxDEV("h6",{className:"progress-title",children:"Workout Plan Progress"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:124,columnNumber:11},void 0),e.jsxDEV(Ie,{now:c,label:`${c}%`,className:"progress-bar-custom",animated:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:125,columnNumber:11},void 0),e.jsxDEV("p",{className:"mt-2",children:[r," Workouts Left"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:131,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:123,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:122,columnNumber:7},void 0),e.jsxDEV("h3",{children:"Today's Workout"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:134,columnNumber:7},void 0),e.jsxDEV(E,{className:"image-box",children:[e.jsxDEV(F,{className:"image-box-col",children:[e.jsxDEV(B,{to:"/dashboard/workout",children:e.jsxDEV("img",{src:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg?auto=webp&width=600",alt:"Person doing workout",className:"images",width:"600",height:"400",loading:"eager",fetchpriority:"high"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:137,columnNumber:11},void 0),o?e.jsxDEV(E,{className:"on-image-text",children:[e.jsxDEV(F,{children:o.name},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:151,columnNumber:15},void 0),e.jsxDEV(F,{children:[o.workout.length," Exercises"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:152,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:150,columnNumber:13},void 0):e.jsxDEV(E,{className:"on-image-text",children:e.jsxDEV(F,{className:"text-center",children:"No workout scheduled for today"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:156,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:155,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:136,columnNumber:9},void 0),e.jsxDEV(F,{children:[e.jsxDEV(B,{to:"/dashboard/diet/macros",children:e.jsxDEV("img",{src:"https://www.takingcharge.csh.umn.edu/sites/default/files/styles/max_1300x1300/public/healthy%20eating%20plate%20iStock-1433432507.jpg.webp?itok=D8OzVh7u",alt:"Healthy balanced meal plate",className:"images",width:"600",height:"400",loading:"lazy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:163,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:162,columnNumber:11},void 0),e.jsxDEV(E,{className:"on-image-text",children:e.jsxDEV(F,{children:"Meals"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:173,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:172,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:161,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:135,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DashboardLayoutPage.jsx",lineNumber:121,columnNumber:5},void 0)},gs=V.div`
  .progress-stat-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 8px 0;
  }

  .progress-stat-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .progress-stat-icon {
    width: 24px;
    height: 24px;
    color: var(--primary-500);
  }

  .progress-stat-label {
    font-size: 14px;
    font-weight: 500;
  }

  .progress-stat-number {
    font-size: 14px;
    font-weight: 700;
  }
`,Pe=({icon:i,label:t,number:o})=>e.jsxDEV(gs,{children:e.jsxDEV("div",{className:"progress-stat-wrapper",children:[e.jsxDEV("div",{className:"progress-stat-left",children:[e.jsxDEV("div",{className:"progress-stat-icon",children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:9,columnNumber:11},void 0),e.jsxDEV("span",{className:"progress-stat-label",children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:10,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:8,columnNumber:9},void 0),e.jsxDEV("span",{className:"progress-stat-number",children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:12,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressStat.jsx",lineNumber:6,columnNumber:5},void 0),Ue=({label:i,route:t})=>e.jsxDEV(B,{to:t,className:"progress-links",children:e.jsxDEV(gs,{children:e.jsxDEV("div",{className:"progress-stat-wrapper",children:[e.jsxDEV("div",{className:"progress-stat-left",children:e.jsxDEV("span",{className:"progress-stat-label",children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:12,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:11,columnNumber:11},void 0),e.jsxDEV("span",{className:"progress-stat-number",children:e.jsxDEV(ns,{size:20},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:15,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:14,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:10,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:9,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ProgressLinks.jsx",lineNumber:8,columnNumber:5},void 0),he=V.div`
  .progress-container {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--grey-100);
    min-height: 100vh;
    overflow-y: auto;
  }

  .muscle-group-container {
    margin-bottom: 2.5rem;
  }

  .muscle-group-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--grey-800);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }

  .muscle-card {
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  .muscle-card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px;
  }

  .muscle-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--grey-700);
    text-transform: capitalize;
    margin-bottom: 0.75rem;
  }
  .weekly-volume-container {
    margin-bottom: 2.5rem;
  }

  .weekly-volume-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748; /* Equivalent to text-gray-800 */
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }

  .volume-card {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .volume-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  .progress-container {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--grey-100);
  }
  .progress-stats {
    margin-top: 1rem;
    background-color: var(--grey-100);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5rem;
    border-radius: 12px;
    width: 80%;
  }
  .progress-stat-label {
    color: var(--black);
  }
  .finished {
    color: green;
  }
  .skipped {
    color: orange;
    font-weight: 700;
  }
  .not-finished {
    color: red;
  }
  h5 {
    margin-top: 1rem;
    font-weight: 400;
  }
  @media (max-width: 992px) {
    .progress-stats {
      width: 100%;
    }
  }
  button {
    background-color: var(--primary-300);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--primary-500);
  }
`,fi=()=>{const{fullWorkoutPlan:i}=ce(),t=se(),o=Q(),l=t.pathname==="/dashboard/progress",s=$t();if(!i?.workoutProgram?.[0]?.weeks)return e.jsxDEV("p",{children:"No workouts found."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:25,columnNumber:12},void 0);const a=s?.workoutProgram?.[0]?.workoutSplitName,p=i.workoutProgram[0].weeks.flatMap(u=>u.days),g=p.filter(u=>u.type==="workout").length,v=p.filter(u=>u.type==="workout"&&u.isFinished&&u.finishedType==="completed").length,r=p.filter(u=>u.type==="workout"&&u.isFinished&&u.finishedType==="skipped").length,c=g-v;return e.jsxDEV(he,{children:l?e.jsxDEV(e.Fragment,{children:[e.jsxDEV("h2",{children:"Your mesocycle"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:51,columnNumber:11},void 0),e.jsxDEV("h5",{children:a||"No workout split name found"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:52,columnNumber:11},void 0),e.jsxDEV("div",{className:"max-w-sm mx-auto p-3 mb-2 progress-container",children:[e.jsxDEV("div",{className:"progress-stats",children:[e.jsxDEV("h3",{className:"text-xl font-bold mb-4",children:"Workouts"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:56,columnNumber:15},void 0),e.jsxDEV(Pe,{icon:e.jsxDEV(qs,{size:20},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:58,columnNumber:23},void 0),label:"Total number",number:g},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:57,columnNumber:15},void 0),e.jsxDEV(Pe,{icon:e.jsxDEV(Xs,{size:20,className:"finished"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:63,columnNumber:23},void 0),label:"Completed",number:v},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:62,columnNumber:15},void 0),e.jsxDEV(Pe,{icon:e.jsxDEV(ns,{size:20,className:"skipped"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:68,columnNumber:23},void 0),label:"Skipped",number:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:67,columnNumber:15},void 0),e.jsxDEV(Pe,{icon:e.jsxDEV(et,{size:20,className:"not-finished"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:73,columnNumber:23},void 0),label:"Not finished",number:c},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:72,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:55,columnNumber:13},void 0),e.jsxDEV("div",{className:"progress-stats",children:[e.jsxDEV(Ue,{label:"Sets per muscle group",route:"/dashboard/progress/sets"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:79,columnNumber:15},void 0),e.jsxDEV(Ue,{label:"Volume per muscle group",route:"/dashboard/progress/volume"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:83,columnNumber:15},void 0),e.jsxDEV(Ue,{label:"Weekly volume",route:"/dashboard/progress/weekly"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:87,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:78,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:54,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:50,columnNumber:9},void 0):e.jsxDEV("div",{className:"relative",children:[e.jsxDEV("button",{onClick:()=>o("/dashboard/progress"),className:"mb-4 flex items-center text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded",children:[e.jsxDEV(ls,{size:20,className:"mr-2"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:100,columnNumber:13},void 0),"Back"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:96,columnNumber:11},void 0),e.jsxDEV(ue,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:103,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:95,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ProgressPage.jsx",lineNumber:48,columnNumber:5},void 0)},Ni=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;

  h1 {
    color: #28a745;
  }

  p {
    font-size: 1.2rem;
    color: #6c757d;
  }

  .btn-primary {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: var(--purple-500);
  }
`,gi=()=>{const i=st({from:{opacity:0,transform:"translateY(100px)"},to:{opacity:1,transform:"translateY(0px)"},config:{tension:220,friction:120}});return e.jsxDEV(Ni,{children:e.jsxDEV(tt.div,{style:i,children:e.jsxDEV(ve,{className:"text-center mt-5",children:e.jsxDEV(E,{className:"justify-content-center",children:e.jsxDEV(F,{md:"8",children:[e.jsxDEV("h1",{className:"mb-4",children:"Email Verified!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:19,columnNumber:15},void 0),e.jsxDEV("p",{className:"lead",children:"Thank you for verifying your email. You are now subscribed to our newsletter!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:20,columnNumber:15},void 0),e.jsxDEV(ae,{variant:"primary",href:"/",children:"Go to Homepage"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:24,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:18,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:17,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:16,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerificationPage.jsx",lineNumber:14,columnNumber:5},void 0)},bi=V.div`
  .min-vh-100 {
    min-height: 100vh;
  }

  .card {
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`,xi=()=>e.jsxDEV(bi,{children:e.jsxDEV(ve,{className:"d-flex justify-content-center align-items-center vh-100",children:e.jsxDEV(E,{className:"text-center",children:e.jsxDEV(F,{children:[e.jsxDEV("h1",{children:"Unsubscribed."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:10,columnNumber:13},void 0),e.jsxDEV("p",{children:"You have successfully unsubscribed from our newsletter."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:11,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:9,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:8,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/UnsubscribePage.jsx",lineNumber:6,columnNumber:5},void 0),ji=V.div`
  .ebooks-container {
    background-color: #f8f9fa;
    padding: 40px 20px;
    min-height: 100vh;
  }

  .ebooks-description {
    margin-top: 15px;
  }
  .ebooks-title {
    font-size: 2.5rem;
    color: #007bff;
    font-weight: bold;
  }

  .ebooks-description {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 30px;
    text-align: center;
  }

  .ebook-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .ebook-card:hover {
    transform: translateY(-5px);
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .ebooks-cta {
    font-size: 1.2rem;
    color: #6c757d;
    margin-top: 40px;
    text-align: center;
  }

  .ebooks-btn {
    width: 200px;
    margin: 10px auto;
    display: block;
  }

  /* Grid Layout */
  .row {
    max-width: 800px;
    margin: auto;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .row {
      max-width: 100%;
    }

    .col-md-6 {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`,Je=({image:i,title:t,description:o,downloadLink:l})=>e.jsxDEV("div",{className:"col-md-6",children:e.jsxDEV("div",{className:"card ebook-card",children:[e.jsxDEV("img",{src:i,className:"card-img-top",alt:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:7,columnNumber:9},void 0),e.jsxDEV("div",{className:"card-body",children:[e.jsxDEV("h2",{className:"card-title",children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:9,columnNumber:11},void 0),e.jsxDEV("p",{className:"card-text",children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:10,columnNumber:11},void 0),e.jsxDEV("a",{href:l,download:!0,className:"btn btn-primary w-100",children:"📥 Download"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:11,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:8,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:6,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/EBookCard.jsx",lineNumber:5,columnNumber:5},void 0),hi=()=>e.jsxDEV(ji,{children:[e.jsxDEV("div",{className:"ebooks-container",children:[e.jsxDEV(B,{to:"../",children:e.jsxDEV("svg",{fill:"#000000",height:"40px",width:"40px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330","xml:space":"preserve",children:e.jsxDEV("path",{id:"XMLID_308_",d:`M315,150H105V90c0-6.067-3.655-11.537-9.26-13.858c-5.606-2.322-12.058-1.038-16.347,3.252l-75,75\r
	c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142\r
	c5.605-2.322,9.26-7.791,9.26-13.858v-60h210c8.284,0,15-6.716,15-15C330,156.716,323.284,150,315,150z M75,203.787L36.213,165\r
	L75,126.213V203.787z`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:34,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:23,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:22,columnNumber:9},void 0),e.jsxDEV("h1",{className:"text-center ebooks-title",children:"Fitness And Nutrition E-Books 📖"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:44,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-center ebooks-description",children:"Unlock your full potential with our expertly crafted training and nutrition guides. Download now and start transforming your fitness journey today!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:47,columnNumber:9},void 0),e.jsxDEV("div",{className:"container",children:e.jsxDEV("div",{className:"row",children:[e.jsxDEV(Je,{image:"/images/Strength & Hypertrophy Training Guide (1).png",title:"Strength & Hypertrophy Guide",description:"Learn how to build muscle, optimize your workout split, and improve recovery.",downloadLink:"/ebooks/Strength & Hypertrophy Training Guide.pdf"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:56,columnNumber:13},void 0),e.jsxDEV(Je,{image:"/images/Ultimate Guide to Healthy Eating & Diet Optimization (1).png",title:"Ultimate Diet & Nutrition Guide",description:"Master nutrition, cut unhealthy fats, and fuel your body for success.",downloadLink:"/ebooks/Ultimate Guide to Healthy Eating & Diet Optimization.pdf"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:63,columnNumber:13},void 0),e.jsxDEV(Je,{image:"/images/The Power of Sleep Unlocking Peak Performance & Recovery.jpg",title:"The Ultimate Guide to Sleep & Recovery",description:"Boost muscle growth, enhance recovery, and improve mental clarity with better sleep.",downloadLink:"/ebooks/The Power of Sleep Unlocking Peak Performance & Recovery.pdf"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:70,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:55,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:54,columnNumber:9},void 0),e.jsxDEV("p",{className:"text-center ebooks-cta",children:"Need personalized fitness plans? Check out our app for more exclusive content!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:80,columnNumber:9},void 0),e.jsxDEV(ee,{smooth:!0,to:"/#section-newsletter",children:e.jsxDEV("a",{href:pi,className:"btn btn-dark d-block mx-auto ebooks-btn",children:"🚀 Get the App"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:85,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:84,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:21,columnNumber:7},void 0),e.jsxDEV(ds,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:93,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/EbooksPage.jsx",lineNumber:20,columnNumber:5},void 0),Fi=()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(E,{children:e.jsxDEV(Rt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AllMealsPage.jsx",lineNumber:10,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AllMealsPage.jsx",lineNumber:9,columnNumber:7},void 0),e.jsxDEV(ms,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AllMealsPage.jsx",lineNumber:12,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AllMealsPage.jsx",lineNumber:8,columnNumber:5},void 0),Di=()=>{const i=n.useRef(null),{user:t}=n.useContext(Ye),[o,l]=n.useState([]),[s,a]=n.useState(!1),[p,g]=n.useState("Breakfast"),v="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",r=async()=>{a(!0);try{const d=await A.post("/calculate-calories-macros/suggestFoods",{userId:t._id,mealType:p},{headers:{"x-api-key":v}}),f=Array.isArray(d.data)?d.data:d.data.meals||[];l(f),setTimeout(()=>{i.current?.scrollIntoView({behavior:"smooth"})},100)}catch(d){y.error("Failed to fetch food suggestions"),console.error(d)}finally{a(!1)}},c=async()=>{a(!0);try{const d=await A.post("/calculate-calories-macros/suggestDailyPlan",{userId:t._id},{headers:{"x-api-key":v}}),f=Object.values(d.data).flat();l(f),setTimeout(()=>{i.current?.scrollIntoView({behavior:"smooth"})},100)}catch(d){y.error("Failed to fetch daily plan"),console.error(d)}finally{a(!1)}},u=t?.macros,x=t?.currentCalories;return!u||!x?e.jsxDEV(e.Fragment,{children:e.jsxDEV(Ne,{message:"Loading your macros and meals..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:88,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:87,columnNumber:7},void 0):e.jsxDEV(e.Fragment,{children:[e.jsxDEV(E,{className:"macros-row",children:[e.jsxDEV(F,{xs:12,md:6,className:"macros-col",children:e.jsxDEV("div",{className:"macros-box",children:[e.jsxDEV("h3",{children:"Macros"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:98,columnNumber:13},void 0),e.jsxDEV(E,{className:"macros-circles",children:[e.jsxDEV(F,{className:"circle protein",children:[`${u.protein}`,"g Proteins"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:100,columnNumber:15},void 0),e.jsxDEV(F,{className:"circle carbs",children:[`${u.carbs}`,"g Carbs"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:103,columnNumber:15},void 0),e.jsxDEV(F,{className:"circle fats",children:[`${u.fat}`,"g Fats"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:104,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:99,columnNumber:13},void 0),e.jsxDEV("h4",{children:["Calories: ",`${x}`]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:97,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV(F,{xs:12,md:6,className:"macros-col d-flex flex-column justify-content-center align-items-center",children:[e.jsxDEV("div",{className:"suggest-food-div",children:[e.jsxDEV("div",{className:"meal-type-dropdown position-relative",children:[e.jsxDEV(H.Select,{value:p,className:"suggest-food-select",onChange:d=>g(d.target.value),children:[e.jsxDEV("option",{value:"Breakfast",children:"Breakfast"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:122,columnNumber:17},void 0),e.jsxDEV("option",{value:"Lunch",children:"Lunch"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:123,columnNumber:17},void 0),e.jsxDEV("option",{value:"Dinner",children:"Dinner"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:124,columnNumber:17},void 0),e.jsxDEV("option",{value:"Snack",children:"Snack"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:125,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:117,columnNumber:15},void 0),e.jsxDEV("span",{className:"dropdown-arrow",children:"⌄"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:127,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:116,columnNumber:13},void 0),e.jsxDEV("button",{className:"suggestion-button one",onClick:r,disabled:s,children:"Suggest Foods"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:130,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:115,columnNumber:11},void 0),e.jsxDEV("button",{className:"suggestion-button two",onClick:c,disabled:s,children:"Suggest Daily Plan"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:110,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:95,columnNumber:7},void 0),o.length>0&&e.jsxDEV("div",{className:"mt-4",ref:i,children:e.jsxDEV(ms,{meals:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:151,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:150,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/MacrosPage.jsx",lineNumber:94,columnNumber:5},void 0)},ki=({dayIndex:i,exercise:t,sets:o,isLast:l,workoutId:s,weekId:a,day:p,weekNumber:g,dayNumber:v})=>{const[r,c]=n.useState([]);n.useState(null);const[u,x]=n.useState(o[0].rest*60),[d,f]=n.useState(o[0].rest*60),[h,j]=n.useState(!1),[b,m]=n.useState([]),[U,L]=n.useState(!1),[w,D]=n.useState(!1);n.useState(!1),n.useState(!1);const Z=()=>D(!1),q=t._id,$="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO";ce(),Q(),n.useEffect(()=>{const k=o[0].rest*60;x(k),f(k),j(!1),m([])},[t]),n.useEffect(()=>{let k;return u===0&&h&&(Y(),y.success("Your Time Is Up!"),j(!1),x(d)),h&&u>0&&(k=setInterval(()=>{x(z=>z-1)},1e3)),()=>clearInterval(k)},[h,u]);const Y=()=>{const k=new(window.AudioContext||window.webkitAudioContext);for(let z=0;z<3;z++){const G=k.createOscillator(),_=k.createGain();G.type="sine",G.frequency.setValueAtTime(1e3,k.currentTime+z*.4),_.gain.setValueAtTime(.1,k.currentTime+z*.4),G.connect(_),_.connect(k.destination),G.start(k.currentTime+z*.4),G.stop(k.currentTime+z*.4+.2)}},oe=async()=>{D(!0);try{const k=await re({muscleType:t.muscleType});c(k.exercises)}catch(k){console.error("Failed to fetch alternative exercises",k)}},re=async({search:k="",muscleType:z="",equipment:G="",sort:_="newest",page:ie=1,limit:N=20})=>{try{const P=new URLSearchParams;return k&&P.append("search",k),z&&P.append("muscleType",z),G&&P.append("equipment",G),_&&P.append("sort",_),ie&&P.append("page",ie),N&&P.append("limit",N),(await A.get(`/generate-custom/workout/get-exercises?${P.toString()}`,{headers:{"x-api-key":$,"Content-Type":"application/json"}})).data}catch(P){throw console.error("Error fetching exercises:",P),P}},ne=()=>{j(k=>!k)},te=k=>{b.includes(k)||(m([...b,k]),ne())},S=k=>{const z=Math.floor(k/60),G=k%60;return`${z}:${G<10?"0":""}${G}`},pe=b.length/o.length*100,K=(u/d*100).toFixed(0);return e.jsxDEV(je,{children:e.jsxDEV("div",{className:"exercise-item",children:[e.jsxDEV(E,{className:"exercise-header align-items-center mb-5",children:[e.jsxDEV(F,{lg:6,md:6,sm:6,xs:6,children:e.jsxDEV("h3",{className:"text-xl font-bold",children:t.name},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:218,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:217,columnNumber:11},void 0),e.jsxDEV(F,{lg:6,md:6,sm:6,xs:6,className:"d-flex justify-content-end",children:[e.jsxDEV("button",{onClick:()=>oe({workoutId:s,exerciseId:t._id,newExerciseId:q,week:g+1,day:i+1,sets:o.length,reps:o[0].reps,rest:o[0].rest,exerciseType:t.type}),children:e.jsxDEV("p",{children:"Change Exercise"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:242,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:227,columnNumber:13},void 0),e.jsxDEV(W,{show:w,onHide:Z,centered:!0,children:[e.jsxDEV(W.Header,{closeButton:!0,children:e.jsxDEV(W.Title,{children:"Change Exercise"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:300,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:299,columnNumber:15},void 0),e.jsxDEV(W.Body,{children:[e.jsxDEV("h6",{children:"This feature is coming soon!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:303,columnNumber:17},void 0),e.jsxDEV("p",{children:"The ability to swap exercises will let you personalize your workouts even more. You’ll be able to choose alternatives that fit your preferences, equipment, or injury needs."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:304,columnNumber:17},void 0),e.jsxDEV("p",{className:"text-muted",children:"Want this feature sooner? Let us know — your feedback helps shape what's next."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:309,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:302,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:298,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:220,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:216,columnNumber:9},void 0),t.image&&e.jsxDEV("img",{src:t.image,alt:t.name,className:"rounded mb-3"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:321,columnNumber:11},void 0),e.jsxDEV("table",{className:"w-full mb-4 text-center",children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV("th",{children:"Weight"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:331,columnNumber:15},void 0),e.jsxDEV("th",{children:"Reps"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:332,columnNumber:15},void 0),e.jsxDEV("th",{children:"Rest"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:333,columnNumber:15},void 0),e.jsxDEV("th",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:334,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:330,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:329,columnNumber:11},void 0),e.jsxDEV("tbody",{children:o.map((k,z)=>e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:[k.weight," kg"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:340,columnNumber:17},void 0),e.jsxDEV("td",{children:[k.reps," reps"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:341,columnNumber:17},void 0),e.jsxDEV("td",{children:[k.rest," min"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:342,columnNumber:17},void 0),e.jsxDEV("td",{className:"td-button",children:e.jsxDEV("button",{className:`table-button px-3 py-1 ${b.includes(z)?"bg-gray-300":"bg-blue-500 text-white"}`,onClick:()=>te(z),disabled:b.includes(z),children:b.includes(z)?"Done":"Set done"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:344,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:343,columnNumber:17},void 0)]},z,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:339,columnNumber:15},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:337,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:328,columnNumber:9},void 0),e.jsxDEV("div",{className:"progress-bar",children:e.jsxDEV("div",{className:"progress-fill",style:{width:`${pe}%`}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:362,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:361,columnNumber:9},void 0),e.jsxDEV(E,{className:"row-timer-instruction",children:[e.jsxDEV(F,{lg:6,md:6,sm:6,children:[e.jsxDEV("button",{className:"border border-blue-500 text-blue-500 px-4 py-2 rounded m-auto",onClick:()=>L(!U),children:"Instructions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:367,columnNumber:13},void 0),U&&e.jsxDEV("div",{className:"instruction-text-container",children:t.instructions||"No instructions provided."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:374,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:366,columnNumber:11},void 0),e.jsxDEV(F,{lg:6,md:6,sm:6,children:e.jsxDEV("div",{className:"relative flex justify-center items-center",children:e.jsxDEV("button",{className:"clock-button",onClick:ne,children:e.jsxDEV("svg",{className:"w-5 h-5",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg",width:"50px",children:[e.jsxDEV("circle",{cx:"60",cy:"60",r:"55",stroke:"gray",strokeWidth:"8",fill:"none",strokeDasharray:"346",strokeDashoffset:346-346*K/100,style:{transition:"stroke-dashoffset 1s linear"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:388,columnNumber:19},void 0),e.jsxDEV("text",{x:"50%",y:"50%",textAnchor:"middle",dy:"0.3em",fontSize:"32",fontWeight:"bold",fill:"black",children:S(u)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:401,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:382,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:381,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:380,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:379,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:365,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:215,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ExerciseItem.jsx",lineNumber:214,columnNumber:5},void 0)},Pi=it`
  .custom-modal .modal-content {
    border-radius: 20px;
  }

  .custom-modal .modal-header,
  .custom-modal .modal-footer {
    border: none;
  }

  .custom-modal .form-check-label {
    //color: white;
    font-weight: 500;
  }
  @media (max-width: 456px){
    .custom-modal .modal-content {
    width: 80%;
    margin: auto;
    }
    .custom-modal .form-check-label {
        font-size: 10px;
        font-weight: 500;
    }
    .custom-modal .form-label{
        font-size: 14px;
    }
    .custom-modal .modal-container p{
        font-size: 14px;
    }
  }
`,Ci=({show:i,handleClose:t,workoutId:o,currentDayId:l})=>{const s="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",[a,p]=n.useState({mindMuscle:"",soreness:"",pump:""}),[g,v]=n.useState(!1),r=u=>{p({...a,[u.target.name]:u.target.value})},c=async()=>{const{mindMuscle:u,soreness:x,pump:d}=a;if(!u||!x||!d){y.warning("Please answer all questions before submitting.");return}v(!0);try{await A.post("generate-custom/workout/progress",{questionOne:u,questionTwo:x,questionThree:d,workoutId:o,currentDayId:l},{headers:{"x-api-key":s}}),y.success("Feedback submitted! Great job 💪"),t()}catch(f){console.error("Error submitting feedback:",f),y.error("Something went wrong. Please try again.")}finally{v(!1)}};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(Pi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(W,{show:i,onHide:()=>{},centered:!0,backdrop:"static",dialogClassName:"custom-modal",keyboard:!1,children:[e.jsxDEV(W.Header,{closeButton:!g,children:e.jsxDEV(W.Title,{children:"Congratulations! 🎯"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:75,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:74,columnNumber:9},void 0),e.jsxDEV(W.Body,{className:"modal-container",children:g?e.jsxDEV(Ne,{message:"Submitting your feedback...",icon:"💪",className:"feedback-spinner"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:80,columnNumber:13},void 0):e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{children:"You have completed your workout."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:87,columnNumber:15},void 0),e.jsxDEV("p",{children:"Help us adjust the next workout:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:88,columnNumber:15},void 0),e.jsxDEV(H,{children:[e.jsxDEV(H.Group,{children:[e.jsxDEV(H.Label,{children:"How good was the mind-muscle connection?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:92,columnNumber:19},void 0),e.jsxDEV("div",{className:"d-flex justify-content-between",children:[e.jsxDEV(H.Check,{type:"radio",label:"No connection",name:"mindMuscle",value:"no connection",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:96,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"Some connection",name:"mindMuscle",value:"some connection",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:103,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"High connection",name:"mindMuscle",value:"high connection",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:110,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:95,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:91,columnNumber:17},void 0),e.jsxDEV(H.Group,{className:"mt-3",children:[e.jsxDEV(H.Label,{children:"How sore were the muscles?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:121,columnNumber:19},void 0),e.jsxDEV("div",{className:"d-flex justify-content-between",children:[e.jsxDEV(H.Check,{type:"radio",label:"No soreness",name:"soreness",value:"no soreness",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:123,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"Some soreness",name:"soreness",value:"some soreness",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:130,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"High soreness",name:"soreness",value:"high soreness",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:137,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:122,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:120,columnNumber:17},void 0),e.jsxDEV(H.Group,{className:"mt-3",children:[e.jsxDEV(H.Label,{children:"How was the muscle pump?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:148,columnNumber:19},void 0),e.jsxDEV("div",{className:"d-flex justify-content-between",children:[e.jsxDEV(H.Check,{type:"radio",label:"No pump",name:"pump",value:"no muscle pump",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:150,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"Some pump",name:"pump",value:"some muscle pump",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:157,columnNumber:21},void 0),e.jsxDEV(H.Check,{type:"radio",label:"Huge pump",name:"pump",value:"high muscle pump",onChange:r},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:164,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:149,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:147,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:90,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:86,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:78,columnNumber:9},void 0),!g&&e.jsxDEV(W.Footer,{children:e.jsxDEV(ae,{variant:"primary",onClick:c,children:"Submit"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:180,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:179,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/WorkoutFeedbackModel.jsx",lineNumber:64,columnNumber:5},void 0)},yi=()=>{const{user:i}=ge(),t="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{state:o}=se(),{weekId:l,day:s,days:a,workoutId:p,weekNumber:g,dayNumber:v,isToday:r}=o||{},{exerciseId:c}=Re(),u=Q(),{setResumeState:x}=ce(),[d,f]=n.useState(!1),[h,j]=n.useState(!1),[b,m]=n.useState(!0),[U,L]=n.useState(!1),[w,D]=n.useState(!1),[Z,q]=n.useState(!1);if(!s||!l)return e.jsxDEV("p",{children:"Data missing"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:37,columnNumber:31},void 0);const $=s.workout.findIndex(C=>String(C._id)===String(c)),Y=s.workout[$],oe=$===s.workout.length-1,re=$===0,ne=s.type=="rest";n.useEffect(()=>{s.finishedType==="started"&&q(!0)},[s.finishedType]),n.useEffect(()=>{x({workoutId:p,weekId:l,dayNumber:v,exerciseId:c})},[p,l,v,c,x]);const te=async()=>{try{D(!0),m(!1),await A.put(`/generate-custom/workout/${p}/started-day`,{weekId:l,dayName:s.name},{headers:{"x-api-key":t}})}catch(C){console.error("Failed to update workout",C)}},S=()=>{const C=s.workout[$+1];C&&(z(C._id),u(`/dashboard/workout/week/${l}/day/${v}/exercise/${C._id}`,{state:{workoutId:p,day:s,days:a,weekId:l,weekNumber:g,dayNumber:v}}))},pe=()=>{const C=s.workout[$-1];C&&(z(C._id),u(`/dashboard/workout/week/${l}/day/${v}/exercise/${C._id}`,{state:{workoutId:p,day:s,days:a,weekId:l,weekNumber:g,dayNumber:v}})),nextExercise._id},K=async()=>{try{f(!0),await A.put(`/generate-custom/workout/${p}/finish-day`,{weekId:l,dayName:s.name,userId:i._id},{headers:{"x-api-key":t}})}catch(C){console.error("Failed to update workout",C)}k()},k=async()=>{try{const T=(await A.post(`/gamification/log-workout/${i._id}`,{},{headers:{"x-api-key":t,"Content-Type":"application/json"}})).data.events||[];if(T.length===0){y.info("Workout logged successfully!");return}T.forEach(R=>{switch(R.type){case"xpEarned":y.success(`+${R.amount} XP earned! 💪`);break;case"badgeUnlocked":y.success(`🏅 New badge unlocked: ${R.name}`);break;case"rewardUnlocked":y.info(`🎁 You unlocked: ${R.name}`);break;default:y.info(R.message||"Progress updated!")}})}catch(C){y.error(C?.response?.data?.message||"Logging Workout Failed!"),console.log(C)}},z=async C=>{try{await A.put(`/generate-custom/workout/${p}/save-progress`,{weekId:l,dayName:s.name,currentExerciseId:C},{headers:{"x-api-key":t}}),s.currentExerciseId=C}catch(T){console.error("Failed to save workout progress",T)}},G=async()=>{try{const{data:C}=await A.get("/generate-custom/workout/get-workout",{headers:{"x-api-key":t}}),T=C.workoutProgram.find(me=>me._id===p);if(!T){console.error("Workout not found for id",p);return}const R=T.weeks.find(me=>me._id===l);if(!R){console.error("Week not found",l);return}const le=R.days.find(me=>me.name===s.name);if(!le){console.error("Day not found",s.name);return}const ye=le.currentExerciseId||le.workout[0]._id;u(`/dashboard/workout/week/${l}/day/${v}/exercise/${ye}`,{state:{workoutId:p,day:le,days:R.days,weekId:l,weekNumber:g,dayNumber:v}})}catch(C){console.error("Failed to fetch workout",C)}};n.useEffect(()=>{},[U]),n.useEffect(()=>{},[d]);const _=()=>{f(!1),j(!0);const C={...s,completed:!0};u("/dashboard/workout",{state:{days:a.map(T=>T.name===s.name?C:T)}})},ie=()=>{L(!0)},N=()=>{L(!1),z(c),u(`/dashboard/workout/week/${l}`,{state:{weekId:l,day:s,days:a,workoutId:p,weekNumber:g,dayNumber:v}})},P=()=>{L(!1)};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:ie,className:"go-back-button",children:"← Back to Days"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:289,columnNumber:7},void 0),e.jsxDEV("div",{className:"day-page",children:ne?e.jsxDEV("div",{className:"rest-day-container",children:[e.jsxDEV("h2",{children:"Rest Day"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:297,columnNumber:13},void 0),e.jsxDEV("p",{children:"Take some time to recover and relax. You’ve earned it!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:298,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:296,columnNumber:11},void 0):e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ki,{dayNumber:v,exercise:Y.exercise,sets:Array.from({length:Y.sets},()=>({reps:Y.reps,rest:Y.rest,weight:Y.weight})),isLast:oe,workoutId:p,weekNumber:g,day:s,weekId:l},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:302,columnNumber:13},void 0),e.jsxDEV("div",{className:"exercise-navigation mt-4 flex gap-4",children:[!re&&e.jsxDEV("button",{onClick:pe,className:"btn btn-secondary back-button",children:"← Back Exercise"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:318,columnNumber:17},void 0),oe?e.jsxDEV("button",{onClick:K,className:"btn btn-success",children:"Finish Workout ✅"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:330,columnNumber:17},void 0):e.jsxDEV("button",{onClick:S,className:"btn btn-primary",children:"Next Exercise →"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:326,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:316,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:301,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:293,columnNumber:7},void 0),d&&e.jsxDEV(Ci,{show:d,handleClose:_,workoutId:p,currentDayId:s._id},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:340,columnNumber:9},void 0),b&&s.finishedType!=="started"&&e.jsxDEV(W,{show:b,centered:!0,children:[e.jsxDEV(W.Header,{children:e.jsxDEV(W.Title,{children:"Start Workout"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:351,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:350,columnNumber:11},void 0),e.jsxDEV(W.Body,{children:[e.jsxDEV("p",{children:"Are you ready to start today’s workout?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:354,columnNumber:13},void 0),e.jsxDEV("div",{className:"button-row",children:[e.jsxDEV("button",{onClick:te,className:"btn btn-primary",children:"Start"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:356,columnNumber:15},void 0),e.jsxDEV("button",{onClick:()=>u(-1),className:"btn btn-secondary",children:"Cancel"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:359,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:355,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:353,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:349,columnNumber:9},void 0),s.finishedType==="started"&&e.jsxDEV(W,{show:Z,onHide:()=>q(!1),centered:!0,children:[e.jsxDEV(W.Header,{children:e.jsxDEV(W.Title,{children:"Continue with your workout"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:377,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:376,columnNumber:11},void 0),e.jsxDEV(W.Body,{children:[e.jsxDEV("p",{children:"Do you want to continue with your workout?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:380,columnNumber:13},void 0),e.jsxDEV("div",{className:"button-row",children:[e.jsxDEV("button",{onClick:()=>{G(),q(!1)},className:"btn btn-primary",children:"Yes"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:382,columnNumber:15},void 0),e.jsxDEV("button",{onClick:()=>{u(`/dashboard/workout/week/${l}/day/${v}/exercise/${s.workout[0]._id}`,{state:{workoutId:p,day:s,days:a,weekId:l,weekNumber:g,dayNumber:v}}),q(!1)},className:"btn btn-secondary",children:"No"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:391,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:381,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:379,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:371,columnNumber:9},void 0),U&&e.jsxDEV(W,{show:U,centered:!0,children:[e.jsxDEV(W.Header,{children:e.jsxDEV(W.Title,{children:"Workout Paused"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:420,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:419,columnNumber:11},void 0),e.jsxDEV(W.Body,{children:[e.jsxDEV("p",{children:"Are you sure you want to quit the workout?"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:423,columnNumber:13},void 0),e.jsxDEV("div",{className:"button-row",children:[e.jsxDEV("button",{onClick:N,className:"btn btn-secondary",children:"Yes"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:425,columnNumber:15},void 0),e.jsxDEV("button",{onClick:P,className:"btn btn-primary",children:"No"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:428,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:424,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:422,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:418,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/DayPage.jsx",lineNumber:288,columnNumber:5},void 0)},wi=()=>{const{weekId:i}=Re(),{state:t}=se(),o=Q(),{workoutId:l,weekNumber:s}=t||{},a=n.useMemo(()=>{if(t?.days)return localStorage.setItem("allDays",JSON.stringify(t.days)),t.days;const c=localStorage.getItem("allDays");return c?JSON.parse(c):[]},[t]),p=n.useMemo(()=>{if(!a.length)return[];const c=new Date;return c.setHours(0,0,0,0),(a[0]?.weekId?a.filter(x=>String(x.weekId)===String(i)):a).map(x=>{const d=x.date?new Date(x.date):null;d&&d.setHours(0,0,0,0);const f=d&&c.getTime()===d.getTime();return{...x,isToday:f}})},[a,i]),g=c=>{switch(c){case"completed":return"Finished";case"started":return"Started";case"skipped":return"Skipped";default:return"Not Started"}},v=(c,u)=>{const x=c.workout?.[0]?._id;o(`day/${u+1}/exercise/${x}`,{state:{workoutId:l,day:c,days:p,weekId:i,weekNumber:s,dayNumber:u+1,isToday:c.isToday}})},r=()=>{o("/dashboard/workout")};return p.length?e.jsxDEV(e.Fragment,{children:[e.jsxDEV("button",{onClick:r,className:"go-back-button",children:"← Back to Weeks"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:92,columnNumber:7},void 0),e.jsxDEV("div",{className:"week-page",children:p.map((c,u)=>{const x=`status-text ${c.finishedType||""}`,d=new Date;d.setHours(0,0,0,0);const f=c.date?new Date(c.date):null;return f&&f.setHours(0,0,0,0),f&&(d.getTime(),f.getTime()),e.jsxDEV("div",{className:`day-card enhanced-day-card ${c.isToday?"current-day":""}`,onClick:()=>v(c,u),children:[e.jsxDEV("div",{className:"day-name-container",children:[e.jsxDEV("h4",{className:"day-name",children:c.name},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:115,columnNumber:17},void 0),c.isToday&&e.jsxDEV("p",{className:"current-label",children:"(current)"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:116,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:114,columnNumber:15},void 0),e.jsxDEV("div",{className:"status-container",children:[e.jsxDEV("p",{className:x,children:g(c.finishedType)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:121,columnNumber:17},void 0),e.jsxDEV("div",{className:`circle ${c.finishedType}`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:124,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:120,columnNumber:15},void 0),c.date&&e.jsxDEV("p",{className:"day-date",children:new Date(c.date).toLocaleDateString()},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:129,columnNumber:17},void 0)]},u,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:108,columnNumber:13},void 0)})},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:95,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:91,columnNumber:5},void 0):e.jsxDEV("div",{className:"week-page",children:[e.jsxDEV("button",{onClick:r,className:"go-back-button",children:"← Back to Weeks"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:82,columnNumber:9},void 0),e.jsxDEV("p",{children:"No days found for this week."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:85,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeekPage.jsx",lineNumber:81,columnNumber:7},void 0)},Ei=({active:i,payload:t,label:o})=>i&&t&&t.length?e.jsxDEV("div",{style:{backgroundColor:"#2d3748",color:"#fff",padding:"0.75rem",borderRadius:"0.25rem",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"},children:e.jsxDEV("p",{children:`Week ${o.replace("Week ","")}: ${t[0].value.toLocaleString()} volume`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:26,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:17,columnNumber:7},void 0):null,Ai=()=>{const{fullWorkoutPlan:i,isLoading:t}=ce(),[o,l]=n.useState({});n.useEffect(()=>{if(t||!i?.workoutProgram?.[0]?.weeks)return;const r={};try{i.workoutProgram[0].weeks.forEach((u,x)=>{const d=`Week ${x+1}`;u.days&&u.days.forEach(f=>{f.workout&&f.workout.forEach(h=>{const b=h?.exercise?.muscleType,m=Number(h?.sets)||0,U=Number(h?.reps)||0,L=Number(h?.weight)||0,w=m*U*L;b&&(r[b]||(r[b]={}),r[b][d]||(r[b][d]=0),r[b][d]+=w)})})});const c={};Object.keys(r).forEach(u=>{c[u]=Object.keys(r[u]).map(x=>({week:x,volume:r[u][x]}))}),l(c)}catch(c){console.error("Error processing volume per muscle by week:",c)}},[i,t]);const s={Chest:["overall chest","upper chest","lower chest"],Back:["overall back","middle back","lats"],Biceps:["biceps"],Legs:["hamstrings","quadriceps","calves"],Abs:["abs"],Shoulders:["front deltoid","rear deltoid","lateral deltoid"],Triceps:["triceps"]},a=["Chest","Back","Shoulders","Legs"],p=Math.max(...Object.values(o).flatMap(r=>r.map(c=>c.volume)),0),g=Math.ceil(p/1e3)*1e3,v=r=>r>=1e3?`${r/1e3}k`:r;return t?e.jsxDEV(he,{children:e.jsxDEV("div",{className:"loading-container",children:[e.jsxDEV("h2",{className:"loading-title",children:"Volume Per Muscle Group"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:138,columnNumber:11},void 0),e.jsxDEV("div",{className:"loading-pulse",children:[e.jsxDEV("div",{className:"loading-bar loading-bar-short animate-pulse"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:140,columnNumber:13},void 0),e.jsxDEV("div",{className:"loading-bar loading-bar-tall animate-pulse"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:141,columnNumber:13},void 0),e.jsxDEV("div",{className:"loading-bar loading-bar-short animate-pulse"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:142,columnNumber:13},void 0),e.jsxDEV("div",{className:"loading-bar loading-bar-tall animate-pulse"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:143,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:137,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:136,columnNumber:7},void 0):i?.workoutProgram?.[0]?.weeks?e.jsxDEV(he,{children:e.jsxDEV("div",{className:"progress-container",children:Object.keys(s).map(r=>{const c=s[r].filter(u=>o[u]);return c.length===0?null:e.jsxDEV("div",{className:"muscle-group-container",children:[e.jsxDEV("h3",{className:"muscle-group-title",children:[r," muscles"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:175,columnNumber:15},void 0),c.map(u=>e.jsxDEV("div",{className:"muscle-card",children:[a.includes(r)&&e.jsxDEV("h4",{className:"muscle-title",children:u},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:179,columnNumber:21},void 0),e.jsxDEV(Be,{width:"100%",height:220,children:e.jsxDEV(ot,{data:o[u],margin:{top:10,right:20,left:0,bottom:10},children:[e.jsxDEV(Oe,{stroke:"#e0e0e0",strokeDasharray:"3 3"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:186,columnNumber:23},void 0),e.jsxDEV($e,{dataKey:"week",stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:187,columnNumber:23},void 0),e.jsxDEV(Ge,{domain:[0,g],tickFormatter:v,stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:194,columnNumber:23},void 0),e.jsxDEV(He,{content:e.jsxDEV(Ei,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:202,columnNumber:41},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:202,columnNumber:23},void 0),e.jsxDEV(rt,{type:"monotone",dataKey:"volume",stroke:"#00C4B4",strokeWidth:3,dot:{r:4,strokeWidth:2,fill:"#fff"},activeDot:{r:6,fill:"#00C4B4",stroke:"#fff"},animationDuration:1e3},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:203,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:182,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:181,columnNumber:19},void 0)]},u,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:177,columnNumber:17},void 0))]},r,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:174,columnNumber:13},void 0)})},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:165,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:164,columnNumber:5},void 0):e.jsxDEV(he,{children:e.jsxDEV("div",{className:"error-container",children:[e.jsxDEV("h2",{className:"error-title",children:"Volume Per Muscle Group"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:154,columnNumber:11},void 0),e.jsxDEV("p",{className:"error-message",children:"No workout plan found. Please ensure a workout plan is set up."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:155,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:153,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VolumePerMusclePage.jsx",lineNumber:152,columnNumber:7},void 0)},Vi=()=>{const{fullWorkoutPlan:i,isLoading:t}=ce(),[o,l]=n.useState([]);if(n.useEffect(()=>{if(t||!i?.workoutProgram?.[0]?.weeks)return;const g={};try{i.workoutProgram[0].weeks.forEach((r,c)=>{const u=`Week ${c+1}`;if(!r.days)return;let x=0;r.days.forEach(d=>{d.workout&&d.workout.forEach(f=>{const h=Number(f?.sets)||0,j=Number(f?.reps)||0,b=Number(f?.weight)||0,m=h*j*b;x+=m})}),g[u]=x});const v=Object.keys(g).map(r=>({week:r,volume:g[r]}));console.log("Formatted weeklyVolumeData:",v),l(v)}catch(v){console.error("Error processing weekly volume:",v)}},[i,t]),t)return e.jsxDEV("div",{className:"w-full min-h-[500px] p-4",children:[e.jsxDEV("h2",{className:"text-2xl font-bold mb-4",children:"Weekly Volume"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:74,columnNumber:9},void 0),e.jsxDEV("div",{className:"animate-pulse space-y-4",children:[e.jsxDEV("div",{className:"h-6 bg-gray-200 rounded w-1/4"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:76,columnNumber:11},void 0),e.jsxDEV("div",{className:"h-48 bg-gray-200 rounded"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:77,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:75,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:73,columnNumber:7},void 0);if(!i?.workoutProgram?.[0]?.weeks)return e.jsxDEV("div",{className:"w-full min-h-[500px] p-4",children:[e.jsxDEV("h2",{className:"text-2xl font-bold mb-4",children:"Weekly Volume"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:86,columnNumber:9},void 0),e.jsxDEV("p",{children:"No workout plan found. Please ensure a workout plan is set up."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:87,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:85,columnNumber:7},void 0);const s=Math.max(...o.map(g=>g.volume),0),a=Math.ceil(s/1e3)*1e3,p=g=>g>=1e3?`${g/1e3}k`:g;return e.jsxDEV(he,{children:e.jsxDEV("div",{className:"progress-container",children:e.jsxDEV("div",{className:"weekly-volume-container",children:[e.jsxDEV("h3",{className:"weekly-volume-title",children:"Weekly volume"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:121,columnNumber:11},void 0),e.jsxDEV("div",{className:"volume-card",children:e.jsxDEV(Be,{width:"100%",height:300,children:e.jsxDEV(as,{data:o,margin:{top:10,right:20,left:0,bottom:10},children:[e.jsxDEV(Oe,{stroke:"#e0e0e0",strokeDasharray:"3 3"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:128,columnNumber:17},void 0),e.jsxDEV($e,{dataKey:"week",stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:129,columnNumber:17},void 0),e.jsxDEV(Ge,{domain:[0,a],tickFormatter:p,stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:136,columnNumber:17},void 0),e.jsxDEV(He,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:144,columnNumber:17},void 0),e.jsxDEV(cs,{dataKey:"volume",fill:"#3B82F6",radius:[4,4,0,0],barSize:40,animationDuration:1e3},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:145,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:123,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:122,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:120,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:119,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/WeeklyVolumePage.jsx",lineNumber:118,columnNumber:5},void 0)},Ui=()=>{const{fullWorkoutPlan:i,isLoading:t}=ce(),[o,l]=n.useState({});if(n.useEffect(()=>{if(t||!i?.workoutProgram?.[0]?.weeks)return;const v={};try{i.workoutProgram[0].weeks.forEach((c,u)=>{const x=`Week ${u+1}`;c.days&&c.days.forEach(d=>{d.workout&&d.workout.forEach(f=>{const j=f?.exercise?.muscleType,b=Number(f?.sets)||0;j&&(v[j]||(v[j]={}),v[j][x]||(v[j][x]=0),v[j][x]+=b)})})});const r={};Object.keys(v).forEach(c=>{r[c]=Object.keys(v[c]).map(u=>({week:u,sets:v[c][u]}))}),l(r)}catch(r){console.error("Error processing sets per muscle by week:",r)}},[i,t]),t)return e.jsxDEV("div",{className:"w-full min-h-[500px] p-4",children:[e.jsxDEV("h2",{className:"text-2xl font-bold mb-4",children:"Sets Per Muscle Group"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:82,columnNumber:9},void 0),e.jsxDEV("div",{className:"animate-pulse space-y-4",children:[e.jsxDEV("div",{className:"h-6 bg-gray-200 rounded w-1/4"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:84,columnNumber:11},void 0),e.jsxDEV("div",{className:"h-48 bg-gray-200 rounded"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:85,columnNumber:11},void 0),e.jsxDEV("div",{className:"h-6 bg-gray-200 rounded w-1/4"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:86,columnNumber:11},void 0),e.jsxDEV("div",{className:"h-48 bg-gray-200 rounded"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:87,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:83,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:81,columnNumber:7},void 0);if(!i?.workoutProgram?.[0]?.weeks)return e.jsxDEV("div",{className:"w-full min-h-[500px] p-4",children:[e.jsxDEV("h2",{className:"text-2xl font-bold mb-4",children:"Sets Per Muscle Group"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:96,columnNumber:9},void 0),e.jsxDEV("p",{children:"No workout plan found. Please ensure a workout plan is set up."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:95,columnNumber:7},void 0);const s={Chest:["overall chest","upper chest","lower chest"],Back:["overall back","middle back","lats"],Biceps:["biceps"],Legs:["hamstrings","quadriceps","calves"],Abs:["abs"],Shoulders:["front deltoid","rear deltoid","lateral deltoid"],Triceps:["triceps"]},a=["Chest","Back","Shoulders","Legs"],p=Math.max(...Object.values(o).flatMap(v=>v.map(r=>r.sets)),0),g=Math.ceil(p/5)*5;return e.jsxDEV(he,{children:e.jsxDEV("div",{className:"progress-container",children:Object.keys(s).map(v=>{const r=s[v].filter(c=>o[c]);return r.length===0?null:e.jsxDEV("div",{className:"muscle-group-container",children:[e.jsxDEV("h3",{className:"muscle-group-title",children:[v," muscles"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:150,columnNumber:15},void 0),r.map(c=>e.jsxDEV("div",{className:"muscle-card",children:[a.includes(v)&&e.jsxDEV("h4",{className:"muscle-title",children:c},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:154,columnNumber:21},void 0),e.jsxDEV(Be,{width:"100%",height:220,children:e.jsxDEV(as,{data:o[c],margin:{top:10,right:20,left:0,bottom:10},children:[e.jsxDEV(Oe,{stroke:"#e0e0e0",strokeDasharray:"3 3"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:161,columnNumber:23},void 0),e.jsxDEV($e,{dataKey:"week",stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:162,columnNumber:23},void 0),e.jsxDEV(Ge,{domain:[0,g],stroke:"#666",fontSize:12,tickLine:!1,axisLine:{stroke:"#ccc"}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:169,columnNumber:23},void 0),e.jsxDEV(He,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:176,columnNumber:23},void 0),e.jsxDEV(cs,{dataKey:"sets",fill:"#8884d8",radius:[4,4,0,0],barSize:30,animationDuration:1e3},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:177,columnNumber:23},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:157,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:156,columnNumber:19},void 0)]},c,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:152,columnNumber:17},void 0))]},v,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:149,columnNumber:13},void 0)})},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:140,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/SetsPerMusclePage.jsx",lineNumber:139,columnNumber:5},void 0)},Ji=V.div`
  .container {
    margin: auto;
    margin-top: 10rem;
    border-radius: 12px;
    background-color: var(--grey-100);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
  }

  button {
    color: white;
    background-color: var(--primary-500);
    border-radius: 12px;
    border: none;
    padding: 0.5rem;
    width: 200px;
    cursor: pointer;
  }
  .spinner {
    margin: 20px auto;
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,de={LOADING:"loading",SUCCESS:"success",ERROR:"error"},Wi=()=>{const{verificationToken:i}=Re(),t=Q(),o=se(),[l,s]=n.useState(de.LOADING),[a,p]=n.useState(""),[g,v]=n.useState(!1),c=new URLSearchParams(o.search).get("email");n.useEffect(()=>{if(!i||!c){p("Invalid or missing token or email.");return}const d=new AbortController,f=d.signal;return(async()=>{s(de.LOADING);try{const j=await A.get(`/auth/verify-email/${i}`,{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO"},signal:f})}catch(j){if(j.name==="AbortError")return;console.warn("Initial verification failed, will still check status:",j)}try{(await A.get(`/auth/check-verification-status?email=${c}`,{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO"},signal:f})).data?.isVerified?(s(de.SUCCESS),localStorage.setItem("emailVerified","true"),window.history.replaceState(null,"","/"),setTimeout(()=>{t("/login",{replace:!0})},3e3)):(p("Your email is not verified yet."),v(!0))}catch(j){if(j.name==="AbortError")return;console.error("Verification status error:",j);const b=j.response?.data?.msg||"Something went wrong.";b.toLowerCase().includes("timeout")||s(de.ERROR),p(b),b.toLowerCase().includes("expired")&&v(!0)}})(),()=>d.abort()},[i,c,t]);const u=async()=>{if(!c){alert("Email is missing. Please provide a valid email.");return}try{await A.post("/auth/resend-verification-email",{email:c},{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO"}}),alert("Verification email resent successfully!")}catch(d){console.error("Resend verification error:",d),alert("Failed to resend verification email.")}},x=()=>{switch(l){case de.LOADING:return e.jsxDEV("div",{className:"container",children:[e.jsxDEV("h2",{children:"Verifying your email..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:139,columnNumber:13},void 0),e.jsxDEV("div",{className:"spinner"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:140,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:138,columnNumber:11},void 0);case de.SUCCESS:return e.jsxDEV("div",{className:"container",children:[e.jsxDEV("h2",{children:"Email verified successfully! 🎉"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:147,columnNumber:13},void 0),e.jsxDEV("p",{children:"Redirecting you to login..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:148,columnNumber:13},void 0),e.jsxDEV("button",{onClick:()=>t("/login"),children:"Go to Login"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:149,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:146,columnNumber:11},void 0);case de.ERROR:return e.jsxDEV("div",{className:"container",children:[e.jsxDEV("h2",{children:"Verification Failed ❌"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:156,columnNumber:13},void 0),e.jsxDEV("p",{children:a},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:157,columnNumber:13},void 0),g?e.jsxDEV("button",{onClick:u,children:"Resend Verification Email"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:159,columnNumber:15},void 0):e.jsxDEV("button",{onClick:()=>t("/resend-verification-email"),children:"Request New Verification"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:163,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:155,columnNumber:11},void 0);default:return null}};return e.jsxDEV(Ji,{children:x()},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/VerifyEmailPage.jsx",lineNumber:175,columnNumber:10},void 0)},Si=async({request:i})=>{const t=await i.formData(),o=Object.fromEntries(t);try{return await A.post("/auth/forgot-password",o,{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO","Content-Type":"application/json"}}),y.success("Reset link sent to your email"),Se("/login")}catch(l){return y.error(l?.response?.data?.msg||"Error sending reset link"),null}},Li=()=>{const t=Le().state==="submitting";return e.jsxDEV(Ce,{children:e.jsxDEV("div",{className:"login-background",children:[e.jsxDEV("h2",{className:"login-heading",children:"Forgot Password"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:35,columnNumber:9},void 0),e.jsxDEV(fe,{method:"post",className:"login-form",children:[e.jsxDEV(M,{type:"email",name:"email",labelText:"Enter your email"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:37,columnNumber:11},void 0),e.jsxDEV("button",{type:"submit",className:"btn",disabled:t,children:t?"Sending...":"Send Reset Link"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:38,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:36,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ForgotPassword.jsx",lineNumber:33,columnNumber:5},void 0)},zi=()=>{const[i]=nt(),t=i.get("token"),o=Q(),[l,s]=n.useState(""),[a,p]=n.useState(""),g=async v=>{if(v.preventDefault(),!t){y.error("Invalid or missing token.");return}if(l!==a){y.error("Passwords do not match.");return}try{await A.post("/auth/reset-password",{token:t,password:l},{headers:{"x-api-key":"wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO","Content-Type":"application/json"}}),y.success("Password reset successful! You can now log in."),o("/login")}catch(r){y.error(r?.response?.data?.msg||"Reset failed.")}};return e.jsxDEV(Ce,{children:e.jsxDEV("div",{className:"background",children:[e.jsxDEV("div",{className:"register-text",children:e.jsxDEV("h2",{className:"login-heading"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:57,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:56,columnNumber:9},void 0),e.jsxDEV(fe,{className:"login-form",onSubmit:g,children:[e.jsxDEV("h2",{children:"Reset Your Password"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:60,columnNumber:11},void 0),e.jsxDEV(M,{type:"password",name:"password",value:l,onChange:v=>s(v.target.value)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:61,columnNumber:11},void 0),e.jsxDEV(M,{type:"password",name:"confirmPassword",value:a,onChange:v=>p(v.target.value)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:68,columnNumber:11},void 0),e.jsxDEV("button",{type:"submit",className:"btn",children:"Reset Password"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:74,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:59,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:55,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ResetPassword.jsx",lineNumber:54,columnNumber:5},void 0)},bs=V.div`
  .page {
    max-width: 100%;
    margin: auto;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    padding: 3rem;
  }
  .container {
    max-width: 800px;
    padding: 2rem;
    margin: auto;
    padding: 2rem;
    background-color: var(--white);
    border-radius: 12px;
    text-align: left;
  }
  h4 {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  p {
    margin-top: 1rem;
  }
  .bold {
    font-weight: 600;
  }
  ul {
    list-style-type: circle;
    padding-left: 2rem;
  }
`,Mi=()=>e.jsxDEV(bs,{children:e.jsxDEV("div",{className:"page",children:[e.jsxDEV(B,{to:"../",children:e.jsxDEV("svg",{fill:"#000000",height:"40px",width:"40px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330","xml:space":"preserve",children:e.jsxDEV("path",{id:"XMLID_308_",d:`M315,150H105V90c0-6.067-3.655-11.537-9.26-13.858c-5.606-2.322-12.058-1.038-16.347,3.252l-75,75\r
            c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142\r
            c5.605-2.322,9.26-7.791,9.26-13.858v-60h210c8.284,0,15-6.716,15-15C330,156.716,323.284,150,315,150z M75,203.787L36.213,165\r
            L75,126.213V203.787z`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:21,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:10,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:9,columnNumber:9},void 0),e.jsxDEV("div",{className:"container",children:[e.jsxDEV("h3",{children:"Privacy policy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:31,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:32,columnNumber:11},void 0),e.jsxDEV("h4",{children:"1. Information We Collect"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:33,columnNumber:11},void 0),e.jsxDEV("p",{children:e.jsxDEV("span",{className:"bold",children:"a. Account Information"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:35,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:34,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Name"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:38,columnNumber:13},void 0),e.jsxDEV("li",{children:"Last name"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:39,columnNumber:13},void 0),e.jsxDEV("li",{children:"Email address"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:40,columnNumber:13},void 0),e.jsxDEV("li",{children:"Password (hashed)"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:41,columnNumber:13},void 0),e.jsxDEV("li",{children:"Date of birth"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:42,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:37,columnNumber:11},void 0),e.jsxDEV("p",{children:e.jsxDEV("span",{className:"bold",children:"b. Fitness & Health Info"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:45,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:44,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Workout preferences"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:48,columnNumber:13},void 0),e.jsxDEV("li",{children:"Logged exercises, reps, sets, weights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:49,columnNumber:13},void 0),e.jsxDEV("li",{children:"Metrics like weight, height, or fitness goals"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:50,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:47,columnNumber:11},void 0),e.jsxDEV("p",{children:[e.jsxDEV("span",{className:"bold",children:"c. Device & Usage Data"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"IP address"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:55,columnNumber:15},void 0),e.jsxDEV("li",{children:"Device type"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:56,columnNumber:15},void 0),e.jsxDEV("li",{children:"App usage patterns"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:57,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:54,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:52,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:60,columnNumber:11},void 0),e.jsxDEV("h4",{children:"2. How We Use Your Information"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:61,columnNumber:11},void 0),e.jsxDEV("p",{children:"We use your data to:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:62,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Create and manage your account"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:64,columnNumber:13},void 0),e.jsxDEV("li",{children:"Provide personalized workout programs"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:65,columnNumber:13},void 0),e.jsxDEV("li",{children:"Send verification or other emails"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:66,columnNumber:13},void 0),e.jsxDEV("li",{children:"Improve our app features or performance"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:67,columnNumber:13},void 0),e.jsxDEV("li",{children:"Comply with legal obligations"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:68,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:63,columnNumber:11},void 0),e.jsxDEV("p",{children:["We ",e.jsxDEV("span",{className:"bold",children:"do not sell "},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:71,columnNumber:16},void 0),"your personal information"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:70,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:74,columnNumber:11},void 0),e.jsxDEV("h4",{children:"3. Email Communication"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:75,columnNumber:11},void 0),e.jsxDEV("p",{children:"We may send:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:76,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Account-related emails (verification, password reset, advices)"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:78,columnNumber:13},void 0),e.jsxDEV("li",{children:"Announcements or app updates"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:81,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:77,columnNumber:11},void 0),e.jsxDEV("p",{children:"You can opt out of non-essential emails at any time."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:83,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:84,columnNumber:11},void 0),e.jsxDEV("h4",{children:"4. Data Sharing"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:85,columnNumber:11},void 0),e.jsxDEV("p",{children:"We only share your information with:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:86,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:[e.jsxDEV("span",{className:"bold",children:"Email delivery providers"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:89,columnNumber:15},void 0)," (e.g., Resend) to send verification or system emails"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:88,columnNumber:13},void 0),e.jsxDEV("li",{children:[e.jsxDEV("span",{className:"bold",children:"Hosting & analytics services"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:93,columnNumber:15},void 0)," to help us maintain the app"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:92,columnNumber:13},void 0),e.jsxDEV("li",{children:[e.jsxDEV("span",{className:"bold",children:"Legal authorities"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:97,columnNumber:15},void 0)," if required by law or in response to valid legal requests"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:96,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:87,columnNumber:11},void 0),e.jsxDEV("p",{children:"We never sell or rent your personal information to third parties."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:101,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:104,columnNumber:11},void 0),e.jsxDEV("h4",{children:"5. How We Protect Your Data"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:105,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"All passwords are hashed using industry standards"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:107,columnNumber:13},void 0),e.jsxDEV("li",{children:"Data is transmitted over encrypted HTTPS connections"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:108,columnNumber:13},void 0),e.jsxDEV("li",{children:"We restrict access to personal data to authorized personnel only"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:109,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:106,columnNumber:11},void 0),e.jsxDEV("p",{children:["Despite our efforts,"," ",e.jsxDEV("span",{className:"bold",children:[" ","no method of transmission is 100% secure"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:115,columnNumber:13},void 0),", and we cannot guarantee absolute security."]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:113,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:121,columnNumber:11},void 0),e.jsxDEV("h4",{children:"6. User Rights"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:122,columnNumber:11},void 0),e.jsxDEV("p",{children:"Depending on your location, you may have the right to:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:123,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Access or update your personal data"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:125,columnNumber:13},void 0),e.jsxDEV("li",{children:"Delete your account and associated data"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:126,columnNumber:13},void 0),e.jsxDEV("li",{children:"Withdraw consent for data processing"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:127,columnNumber:13},void 0),e.jsxDEV("li",{children:"Request a copy of your data"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:128,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:124,columnNumber:11},void 0),e.jsxDEV("p",{children:["To make a request, email us at"," ",e.jsxDEV("span",{className:"bold",children:"support@fittestsapp.com."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:132,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:130,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:134,columnNumber:11},void 0),e.jsxDEV("h4",{children:"7. Children’s Privacy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:135,columnNumber:11},void 0),e.jsxDEV("p",{children:"Fittest is not intended for users under the age of 18. We do not knowingly collect data from children."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:136,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:140,columnNumber:11},void 0),e.jsxDEV("h4",{children:"8. Data Retention"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:141,columnNumber:11},void 0),e.jsxDEV("p",{children:"We retain your data as long as your account is active or as needed to provide services. You can request deletion at any time."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:142,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:146,columnNumber:11},void 0),e.jsxDEV("h4",{children:"9. Third-Party Links"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:147,columnNumber:11},void 0),e.jsxDEV("p",{children:"We may link to third-party sites or services. We are not responsible for their privacy practices."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:148,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:152,columnNumber:11},void 0),e.jsxDEV("h4",{children:"10. Changes to This Policy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:153,columnNumber:11},void 0),e.jsxDEV("p",{children:"We may update this Privacy Policy from time to time. Changes will be posted within the app or on our website."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:154,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:158,columnNumber:11},void 0),e.jsxDEV("h4",{children:"11. Contact Us"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:159,columnNumber:11},void 0),e.jsxDEV("p",{children:["If you have any questions or concerns about this Privacy Policy, reach out: ",e.jsxDEV("span",{className:"bold",children:"support@fittests.com"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:162,columnNumber:24},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:160,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:30,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:8,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/PrivacyPolicy.jsx",lineNumber:7,columnNumber:5},void 0),Ti=()=>e.jsxDEV(bs,{children:e.jsxDEV("div",{className:"page",children:[e.jsxDEV(B,{to:"../",children:e.jsxDEV("svg",{fill:"#000000",height:"40px",width:"40px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330","xml:space":"preserve",children:e.jsxDEV("path",{id:"XMLID_308_",d:`M315,150H105V90c0-6.067-3.655-11.537-9.26-13.858c-5.606-2.322-12.058-1.038-16.347,3.252l-75,75\r
                    c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142\r
                    c5.605-2.322,9.26-7.791,9.26-13.858v-60h210c8.284,0,15-6.716,15-15C330,156.716,323.284,150,315,150z M75,203.787L36.213,165\r
                    L75,126.213V203.787z`},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:21,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:10,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:9,columnNumber:9},void 0),e.jsxDEV("div",{className:"container",children:[e.jsxDEV("h3",{children:"Terms & Conditions"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:31,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:32,columnNumber:11},void 0),e.jsxDEV("h4",{children:"1. Acceptance of Terms"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:33,columnNumber:11},void 0),e.jsxDEV("p",{children:"By creating an account or using the Fittest App, you agree to these Terms & Conditions. If you do not agree, do not use the App."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:34,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:38,columnNumber:11},void 0),e.jsxDEV("h4",{children:"2. Eligibility"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:39,columnNumber:11},void 0),e.jsxDEV("p",{children:"You must be at least 18 years old to use this app. By using Fittest App, you confirm that you meet this requirement."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:40,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:44,columnNumber:11},void 0),e.jsxDEV("h4",{children:"3. Health Disclaimer"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:45,columnNumber:11},void 0),e.jsxDEV("p",{children:[e.jsxDEV("span",{className:"bold",children:"We are not medical professionals."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:47,columnNumber:13},void 0)," The workouts, nutrition tips, and fitness recommendations in the app are for",e.jsxDEV("span",{className:"bold",children:"informational purposes only."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:50,columnNumber:13},void 0)," They are"," ",e.jsxDEV("span",{className:"bold",children:"not a substitute for professional medical advice, diagnosis, or treatment."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:51,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:46,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Always consult a physician before starting any fitness program."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("li",{children:"Stop exercising and seek medical attention if you experience pain, dizziness, or shortness of breath."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:60,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:56,columnNumber:11},void 0),e.jsxDEV("p",{children:"You assume full responsibility for your health decisions and outcomes related to the use of this app."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:65,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:69,columnNumber:11},void 0),e.jsxDEV("h4",{children:"4. User Responsibilities"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:70,columnNumber:11},void 0),e.jsxDEV("p",{children:"You agree to:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:71,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:"Use the app only for lawful, personal use."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:73,columnNumber:13},void 0),e.jsxDEV("li",{children:"Provide accurate information when signing up"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:74,columnNumber:13},void 0),e.jsxDEV("li",{children:"Not share your account with others."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:75,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:72,columnNumber:11},void 0),e.jsxDEV("p",{children:"We reserve the right to suspend or terminate your access if you violate these terms."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:77,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:81,columnNumber:11},void 0),e.jsxDEV("h4",{children:"5. No Guarantee of Results"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:82,columnNumber:11},void 0),e.jsxDEV("p",{children:"Fittest App does not guarantee any specific fitness results. Progress depends on many individual factors, including diet, consistency, genetics, and lifestyle."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:83,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:88,columnNumber:11},void 0),e.jsxDEV("h4",{children:"6. Intellectual Property"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:89,columnNumber:11},void 0),e.jsxDEV("p",{children:"All content in the app (logos, workouts, code, text, etc.) is the property of Fittest or its licensors. You may not reproduce, distribute, or exploit it without permission."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:90,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:95,columnNumber:11},void 0),e.jsxDEV("h4",{children:"7. Modifications to the App"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:96,columnNumber:11},void 0),e.jsxDEV("p",{children:"We may update or discontinue features in the app at any time, with or without notice."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:97,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:101,columnNumber:11},void 0),e.jsxDEV("h4",{children:"8. Limitation of Liability"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:102,columnNumber:11},void 0),e.jsxDEV("p",{children:"To the maximum extent permitted by law:"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:103,columnNumber:11},void 0),e.jsxDEV("ul",{children:[e.jsxDEV("li",{children:["Fittest App, its developers, and affiliates are"," ",e.jsxDEV("span",{className:"bold",children:"not liable"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:107,columnNumber:15},void 0)," for any injury, health issue, or loss (financial or otherwise) arising from the use of this app."]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:105,columnNumber:13},void 0),e.jsxDEV("li",{children:["Use of the app is ",e.jsxDEV("span",{className:"bold",children:"at your own risk."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:112,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:111,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:104,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:115,columnNumber:11},void 0),e.jsxDEV("h4",{children:"9. Third-Party Services"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:116,columnNumber:11},void 0),e.jsxDEV("p",{children:"The app may link to or integrate with third-party tools or platforms. We are not responsible for their practices or content."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:117,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:121,columnNumber:11},void 0),e.jsxDEV("h4",{children:"10. Data & Privacy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:122,columnNumber:11},void 0),e.jsxDEV("p",{children:["We respect your privacy. Please review our"," ",e.jsxDEV(B,{to:"/privacy-policy",children:e.jsxDEV("span",{className:"bold",children:"Privacy policy"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:126,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:125,columnNumber:13},void 0)," ","to learn how we handle your data."]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:123,columnNumber:11},void 0),e.jsxDEV("hr",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:130,columnNumber:11},void 0),e.jsxDEV("h4",{children:"11. Contact"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:131,columnNumber:11},void 0),e.jsxDEV("p",{children:["If you have questions about these Terms,",e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:134,columnNumber:13},void 0)," contact us at:",e.jsxDEV("span",{className:"bold",children:" support@fittestsapp.com"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:132,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:30,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:8,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/TermsAndConditions.jsx",lineNumber:7,columnNumber:5},void 0),Ii=V.section`
  margin: auto;
  h2 {
    margin-bottom: 1rem;
  }
  .progress-box {
    background: #fff;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    max-width: 100%;
    margin: auto;
  }

  .progress-box:hover {
    transform: translateY(-5px);
  }

  .progress-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .progress-bar-custom {
    height: 1.2rem;
    border-radius: 10px;
    background-color: var(--grey-200);
  }

  .progress-bar-custom .progress-bar {
    background-color: var(--primary-500);
    font-size: 0.7rem;
    font-weight: 500;
  }
  .percentage {
    text-align: right;
    font-weight: bold;
  }
  .level-streak-row {
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .level-streak {
    flex: 1;
    background-color: var(--grey-100);
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .streak-row {
    font-size: 0.9rem;
    color: #444;
  }

  .streak-text {
    margin: 0;
    font-weight: 500;
  }
  .badges-card {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  }

  .challenges-card {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  }

  .rewards-card {
    background: linear-gradient(135deg, #fddb92, #d1fdff);
  }
  .badges-card:hover,
  .challenges-card:hover,
  .rewards-card:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    transition: 300ms ease-in-out;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  .card-subtext {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
  }

  button {
    background-color: var(--primary-300);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--primary-500);
  }

  @media (max-width: 756px) {
    .level-streak-row {
      flex-direction: column;
    }
  }
`,Ri=()=>{const i="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{user:t}=Te(),[o,l]=n.useState(null),[s,a]=n.useState(!0),p=se(),g=Q(),v=p.pathname==="/dashboard/achievements";if(n.useEffect(()=>{if(!t?._id)return;(async()=>{try{const{data:b}=await A.get(`/gamification/profile/${t._id}`,{headers:{"x-api-key":i}});l(b)}catch(b){console.error("Error:",b),y.error(b?.response?.data?.message||"No gamification profile!")}finally{a(!1)}})()},[t?._id,i]),s)return e.jsxDEV("p",{children:"Loading gamification data..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:54,columnNumber:12},void 0);if(!o)return e.jsxDEV("p",{children:"No profile found."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:58,columnNumber:12},void 0);const{xp:r,level:c,streak:u,xpForNext:x}=o,d=x,f=Math.round(Math.min(r%d/d,1)*100),h=d-r;return e.jsxDEV(Ii,{children:v?e.jsxDEV(e.Fragment,{children:[e.jsxDEV("h2",{children:"Achievements Dashboard"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:73,columnNumber:11},void 0),e.jsxDEV(E,{className:"progress-box mb-4",children:e.jsxDEV(F,{xs:12,sm:8,className:"progress-box-col",children:[e.jsxDEV("h6",{className:"progress-title",children:"Your XP"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:76,columnNumber:15},void 0),e.jsxDEV(Ie,{now:f,label:`${r}xp (${f}%)`,className:"progress-bar-custom",animated:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:77,columnNumber:15},void 0),e.jsxDEV(E,{className:"justify-content-between mt-2",children:[e.jsxDEV(F,{xs:"auto",children:["Level ",c]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:84,columnNumber:17},void 0),e.jsxDEV(F,{xs:"auto",children:[h,"xp left to next level"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:85,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:83,columnNumber:15},void 0),e.jsxDEV(E,{className:"streak-row mt-5",children:[e.jsxDEV(F,{children:e.jsxDEV("p",{className:"streak-text",children:["🔥 Current Streak: ",e.jsxDEV("strong",{children:u.current},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:92,columnNumber:40},void 0)," days"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:91,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:90,columnNumber:17},void 0),e.jsxDEV(F,{className:"text-end",children:e.jsxDEV("p",{className:"streak-text",children:["🏆 Longest: ",e.jsxDEV("strong",{children:u.longest},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:97,columnNumber:33},void 0)," days"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:96,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:89,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:75,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:74,columnNumber:11},void 0),e.jsxDEV(E,{className:"level-streak-row",children:[e.jsxDEV(F,{md:3,className:"level-streak badges-card",children:e.jsxDEV(B,{to:"/dashboard/achievements/badges",state:{unlockedBadges:o.badges},className:"block w-full h-full text-white",children:[e.jsxDEV("h3",{children:"Badges 🏅"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:111,columnNumber:17},void 0),e.jsxDEV("p",{className:"card-subtext",children:"View all badges you’ve unlocked"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:112,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:106,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:105,columnNumber:13},void 0),e.jsxDEV(F,{md:5,className:"level-streak challenges-card",children:e.jsxDEV(B,{to:"/dashboard/achievements/challenges",state:{enrolledChallenges:o.challenges,streak:o.streak},className:"block w-full h-full text-white",children:[e.jsxDEV("h3",{children:"Challenges ⚔️"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:125,columnNumber:17},void 0),e.jsxDEV("p",{className:"card-subtext",children:"Checkout the new challenges"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:126,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:117,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:116,columnNumber:13},void 0),e.jsxDEV(F,{md:4,className:"level-streak rewards-card",children:e.jsxDEV(B,{to:"/dashboard/achievements/rewards",state:{rewards:o.rewards},className:"block w-full h-full text-white",children:[e.jsxDEV("h3",{children:"Rewards 🎁"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:136,columnNumber:17},void 0),e.jsxDEV("p",{className:"card-subtext",children:"Claim your rewards"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:137,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:131,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:130,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:104,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:72,columnNumber:9},void 0):e.jsxDEV("div",{className:"relative",children:[e.jsxDEV("button",{onClick:()=>g("/dashboard/achievements"),className:"mb-4 flex items-center text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded",children:[e.jsxDEV(ls,{size:20,className:"mr-2"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:148,columnNumber:13},void 0),"Back"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:144,columnNumber:11},void 0),e.jsxDEV(ue,{context:{profile:o}},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:151,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:143,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/AchievementsPage.jsx",lineNumber:70,columnNumber:5},void 0)},Bi=V.section`
  .badge-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    width: 100%;
    max-width: 380px;
    margin: auto;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  .badge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .badge-card.unlocked {
    border-color: #22c55e;
  }

  .badge-card.locked {
    border-color: #d1d5db;
    opacity: 0.7;
  }

  .badge-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .badge-icon img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .badge-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #111827;
  }

  .badge-description {
    font-size: 0.875rem;
    color: #4b5563;
  }

  .badge-status {
    margin-top: 8px;
    font-weight: 500;
  }

  .badge-status.status-unlocked {
    color: #16a34a;
  }

  .badge-status.status-locked {
    color: #dc2626;
  }
  @media (max-width: 490px) {
    .badge-card {
      max-width: 280px;
      padding: 16px;
    }

    .badge-description {
      font-size: 0.8rem;
      line-height: 1.3;
    }

    .badge-name {
      font-size: 1rem;
    }
  }
`,Oi=({name:i,icon:t,description:o,unlocked:l})=>e.jsxDEV(Bi,{children:e.jsxDEV("div",{className:`badge-card ${l?"unlocked":"locked"}`,children:[e.jsxDEV("div",{className:"badge-icon",children:t?t.startsWith("http")?e.jsxDEV("img",{src:t,alt:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:11,columnNumber:15},void 0):t:"🏅"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:8,columnNumber:9},void 0),e.jsxDEV("h3",{className:"badge-name",children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:19,columnNumber:9},void 0),e.jsxDEV("p",{className:"badge-description",children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:20,columnNumber:9},void 0),e.jsxDEV("p",{className:`badge-status ${l?"status-unlocked":"status-locked"}`,children:l?"Unlocked ✅":"Locked 🔒"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:21,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/BadgeComponent.jsx",lineNumber:6,columnNumber:5},void 0),$i=V.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  /* ---------- Header ---------- */
  .rewards-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: var(--grey-300);
    color: #111827;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-toggle:hover {
    background-color: #e5e7eb;
  }

  /* ---------- Dropdown ---------- */
  .filter-dropdown {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: var(--grey-100);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    padding: 1rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--grey-200);
    color: #374151;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-option:hover {
    background-color: #e5e7eb;
  }

  .filter-option.active {
    background-color: #3b82f6;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  }

  .filter-option svg {
    flex-shrink: 0;
  }

  /* ---------- Grid ---------- */
  .rewards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .loading,
  .empty {
    text-align: center;
    color: #4b5563;
    font-size: 1rem;
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    .rewards-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .filter-toggle {
      font-size: 0.85rem;
      padding: 7px 12px;
      align-self: flex-start;
    }

    .filter-dropdown {
      padding: 0.8rem;
      gap: 0.5rem;
      width: fit-content;
      align-self: flex-end;
    }

    .filter-option {
      font-size: 0.85rem;
      padding: 8px 12px;
    }
  }
  .badge {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .badge {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`,Gi=()=>{const i="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO";ge();const[t,o]=n.useState([]),[l,s]=n.useState(!0),[a,p]=n.useState("all"),v=se().state?.unlockedBadges||[],[r,c]=n.useState(!1);if(n.useEffect(()=>{(async()=>{try{const f=await A.get("/gamification/badge/get",{headers:{"x-api-key":i}}),h=v.map(b=>typeof b.badgeId=="object"?b.badgeId._id?.toString():b.badgeId?.toString()),j=f.data.map(b=>({...b,unlocked:h.includes(b._id.toString())}));console.log("Unlocked badge IDs:",h),console.log("All badge IDs:",f.data.map(b=>b._id)),o(j)}catch(f){console.error("Error:",f),y.error(f?.response?.data?.message||"No gamification profile!")}finally{s(!1)}})()},[i,v]),l)return e.jsxDEV("p",{children:"Loading badges..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:56,columnNumber:23},void 0);if(!t.length)return e.jsxDEV("p",{children:"No badges found!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:57,columnNumber:30},void 0);const u=t.filter(d=>a==="unlocked"?d.unlocked:a==="locked"?!d.unlocked:!0),x=d=>{p(d),c(!1)};return e.jsxDEV($i,{children:[e.jsxDEV("div",{className:"rewards-header",children:[e.jsxDEV("h2",{children:"Badges"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:73,columnNumber:9},void 0),e.jsxDEV("div",{className:"filter-toggle",onClick:()=>c(d=>!d),children:[r?e.jsxDEV(ps,{size:18},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:79,columnNumber:26},void 0):e.jsxDEV(Ze,{size:18},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:79,columnNumber:44},void 0),e.jsxDEV("span",{children:"Filters"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:75,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:72,columnNumber:7},void 0),r&&e.jsxDEV("div",{className:"filter-dropdown",children:[e.jsxDEV("div",{className:`filter-option ${a==="all"?"active":""}`,onClick:()=>x("all"),children:"🌟 All"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:86,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${a==="unlocked"?"active":""}`,onClick:()=>x("unlocked"),children:[e.jsxDEV(Ke,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:96,columnNumber:13},void 0)," Unlocked"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:92,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${a==="locked"?"active":""}`,onClick:()=>x("locked"),children:[e.jsxDEV(_e,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:102,columnNumber:13},void 0)," Locked"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:98,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:85,columnNumber:9},void 0),e.jsxDEV("div",{className:"badge",children:u.map(d=>e.jsxDEV(Oi,{...d},d._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:109,columnNumber:11},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:107,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/BadgesPage.jsx",lineNumber:71,columnNumber:5},void 0)},Hi=V.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  /* ---------- Header ---------- */
  .rewards-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: var(--grey-300);
    color: #111827;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-toggle:hover {
    background-color: #e5e7eb;
  }

  /* ---------- Dropdown ---------- */
  .filter-dropdown {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: var(--grey-100);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    padding: 1rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--grey-200);
    color: #374151;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-option:hover {
    background-color: #e5e7eb;
  }

  .filter-option.active {
    background-color: #3b82f6;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  }

  .filter-option svg {
    flex-shrink: 0;
  }

  /* ---------- Grid ---------- */
  .rewards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .loading,
  .empty {
    text-align: center;
    color: #4b5563;
    font-size: 1rem;
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    .rewards-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .filter-toggle {
      font-size: 0.85rem;
      padding: 7px 12px;
      align-self: flex-start;
    }

    .filter-dropdown {
      padding: 0.8rem;
      gap: 0.5rem;
      width: fit-content;
      align-self: flex-end;
    }

    .filter-option {
      font-size: 0.85rem;
      padding: 8px 12px;
    }
  }
  .challenge {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .challenge {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`,Zi=V.section`
  .challenge-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    width: 100%;
    max-width: 380px;
    margin: auto;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .challenge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .challenge-card.enrolled {
    border: 2px solid #22c55e;
  }

  .challenge-card.not-enrolled {
    border: 2px solid #d1d5db;
    opacity: 0.7;
  }

  .challenge-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .challenge-icon img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .challenge-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #111827;
  }

  .challenge-description {
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 8px;
  }

  /* New fields */
  .challenge-type {
    font-size: 0.9rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }

  .challenge-goal {
    font-size: 0.9rem;
    color: #1f2937;
    margin-bottom: 6px;
  }

  .challenge-dates {
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 10px;
  }

  .challenge-reward {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 10px 0;
    font-weight: 500;
    color: #111827;
  }

  .challenge-reward span {
    background: #f3f4f6;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .challenge-status {
    margin-top: 8px;
    font-weight: 600;
  }

  .challenge-status.status-enrolled {
    color: #16a34a;
  }

  .challenge-status.status-not-enrolled {
    color: #dc2626;
  }

  .challenge-card.completed {
    border: 2px solid gold;
    background: linear-gradient(145deg, #fff9c4, #ffecb3);
    color: #333;
    position: relative;
  }

  .completed-badge {
    background: gold;
    color: #222;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .status-completed {
    color: #ffb300;
    font-weight: bold;
  }
`,Ki=({_id:i,name:t,type:o,metric:l,target:s,startDate:a,endDate:p,reward:g,enrolled:v,completed:r,progress:c})=>{const[u,x]=n.useState(!1),d="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{user:f}=ge();console.log(r);const h=L=>L?new Date(L).toLocaleDateString():"N/A",j=c||0,b=s>0?Math.min(j/s*100,100):0,m=()=>{x(!0)},U=async()=>{try{await A.post("/gamification/challenge/enroll",{challengeId:i,userId:f._id},{headers:{"x-api-key":d}}),y.success("You have enrolled in the challenge! ⚔️")}catch(L){console.error("Error:",L),y.error(L?.response?.data?.message||"Cannot enroll in the challenge!")}finally{x(!1)}};return e.jsxDEV(Zi,{children:[e.jsxDEV("div",{className:`challenge-card ${r?"completed":v?"enrolled":"not-enrolled"}`,children:[e.jsxDEV("div",{className:"challenge-icon",children:r?"🏆":"⚔️"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:67,columnNumber:9},void 0),e.jsxDEV("h3",{className:"challenge-name",children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:69,columnNumber:9},void 0),e.jsxDEV("p",{className:"challenge-type",children:[o.charAt(0).toUpperCase()+o.slice(1)," Challenge"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:70,columnNumber:9},void 0),e.jsxDEV("p",{className:"challenge-goal",children:["Goal: ",e.jsxDEV("strong",{children:s},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:75,columnNumber:17},void 0)," ",l]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:74,columnNumber:9},void 0),e.jsxDEV("p",{className:"challenge-dates",children:[h(a)," – ",h(p)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV("div",{className:"challenge-reward",children:[g?.xp&&e.jsxDEV("span",{children:["⭐ ",g.xp," XP"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:82,columnNumber:26},void 0),g?.currency&&e.jsxDEV("span",{children:["💰 ",g.currency]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:83,columnNumber:32},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:81,columnNumber:9},void 0),r?e.jsxDEV("div",{className:"completed-badge",children:"🎉 Challenge Completed!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:87,columnNumber:11},void 0):v?e.jsxDEV(Ie,{now:b,label:`${j}/${s}`,className:"progress-bar-custom",animated:!0},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:89,columnNumber:11},void 0):e.jsxDEV("button",{className:"primary-button",onClick:m,children:"Enroll"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:96,columnNumber:11},void 0),e.jsxDEV("p",{className:`challenge-status ${r?"status-completed":v?"status-enrolled":"status-not-enrolled"}`,children:r?"Completed 🏆":v?"Enrolled ✅":"Not Enrolled 🔒"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:101,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:62,columnNumber:7},void 0),e.jsxDEV(W,{show:u,onHide:()=>x(!1),centered:!0,children:[e.jsxDEV(W.Header,{closeButton:!0,children:e.jsxDEV(W.Title,{children:"Confirm Enrollment"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:120,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:119,columnNumber:9},void 0),e.jsxDEV(W.Body,{children:e.jsxDEV("p",{children:["Do you want to enroll in ",e.jsxDEV("strong",{children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:124,columnNumber:38},void 0),"? ",e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:124,columnNumber:63},void 0),"Goal: ",s," ",l]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:123,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV(W.Footer,{children:[e.jsxDEV(ae,{variant:"secondary",onClick:()=>x(!1),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:129,columnNumber:11},void 0),e.jsxDEV(ae,{variant:"primary",onClick:U,children:"Confirm"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:132,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:128,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:118,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/ChallengeComponent.jsx",lineNumber:61,columnNumber:5},void 0)},_i=()=>{const i="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",{user:t}=ge(),[o,l]=n.useState([]),[s,a]=n.useState(!0),[p,g]=n.useState("all"),v=se(),r=v.state?.enrolledChallenges||[],c=v.state?.streak,{profile:u}=Te(),[x,d]=n.useState(!1),f=n.useRef([]);if(n.useEffect(()=>{(async()=>{try{const U=(await A.get("/gamification/challenge/get",{headers:{"x-api-key":i}})).data.map(w=>{const D=r?.find(Y=>Y.challengeId._id===w._id),Z=!!D,q=D?.progress??(()=>{switch(w.metric){case"streaks":case"days":return c?.current||0;case"workouts":return t?.workoutsCompleted||0;case"reps":return v?.state?.totalReps||0;case"sets":return v?.state?.totalSets||0;default:return 0}})(),$=D?.completed??!1;return{...w,enrolled:Z,completed:$,progress:q}}),L=f.current;U.forEach(w=>{const D=L.find(Z=>Z._id===w._id);!D?.completed&&w.completed?y.success(`🔥 Challenge Completed: ${w.name}`):D&&w.progress>D.progress&&!w.completed&&y.info(`📈 ${w.name}: ${w.progress}/${w.target}`)}),f.current=U,l(U)}catch(m){console.error("Error:",m),y.error(m?.response?.data?.message||"No gamification profile!")}finally{a(!1)}})()},[i,r,c,v.state]),s)return e.jsxDEV("p",{children:"Loading challenges..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:97,columnNumber:23},void 0);if(!o.length)return e.jsxDEV("p",{children:"No challenges found!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:98,columnNumber:34},void 0);const h=o.filter(b=>p==="enrolled"?b.enrolled:p==="notEnrolled"?!b.enrolled:!0),j=b=>{g(b),d(!1)};return e.jsxDEV(Hi,{children:[e.jsxDEV("div",{className:"rewards-header",children:[e.jsxDEV("h2",{children:"Challenges"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:114,columnNumber:9},void 0),e.jsxDEV("div",{className:"filter-toggle",onClick:()=>d(b=>!b),children:[x?e.jsxDEV(ps,{size:18},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:120,columnNumber:26},void 0):e.jsxDEV(Ze,{size:18},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:120,columnNumber:44},void 0),e.jsxDEV("span",{children:"Filters"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:121,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:116,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:113,columnNumber:7},void 0),x&&e.jsxDEV("div",{className:"filter-dropdown",children:[e.jsxDEV("div",{className:`filter-option ${p==="all"?"active":""}`,onClick:()=>j("all"),children:"🌟 All"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:127,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${p==="enrolled"?"active":""}`,onClick:()=>j("enrolled"),children:[e.jsxDEV(Ke,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:137,columnNumber:13},void 0)," Enrolled"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:133,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${p==="notEnrolled"?"active":""}`,onClick:()=>j("notEnrolled"),children:[e.jsxDEV(_e,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:143,columnNumber:13},void 0)," Not Enrolled"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:126,columnNumber:9},void 0),e.jsxDEV("div",{className:"challenge",children:h.map(b=>e.jsxDEV(Ki,{...b,streak:c,progress:b.progress,profile:u},b._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:150,columnNumber:11},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:148,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/ChallengesPage.jsx",lineNumber:112,columnNumber:5},void 0)},Yi=V.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  /* ---------- Header ---------- */
  .rewards-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: var(--grey-300);
    color: #111827;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-toggle:hover {
    background-color: #e5e7eb;
  }

  /* ---------- Dropdown ---------- */
  .filter-dropdown {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: var(--grey-100);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    padding: 1rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--grey-200);
    color: #374151;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-option:hover {
    background-color: #e5e7eb;
  }

  .filter-option.active {
    background-color: #3b82f6;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  }

  .filter-option svg {
    flex-shrink: 0;
  }

  /* ---------- Grid ---------- */
  .rewards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .loading,
  .empty {
    text-align: center;
    color: #4b5563;
    font-size: 1rem;
    margin-top: 3rem;
  }

  @media (max-width: 640px) {
    .rewards-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .filter-toggle {
      font-size: 0.85rem;
      padding: 7px 12px;
      align-self: flex-start;
    }

    .filter-dropdown {
      padding: 0.8rem;
      gap: 0.5rem;
      width: fit-content;
      align-self: flex-end;
    }

    .filter-option {
      font-size: 0.85rem;
      padding: 8px 12px;
    }
  }
`,Qi=V.section`
  .reward-card {
    background-color: #ffffff;
    border: 2px solid transparent;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
  }

  .reward-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .reward-card.unlocked {
    border-color: #22c55e;
  }

  .reward-card.locked {
    border-color: #d1d5db;
    opacity: 0.75;
  }

  .reward-icon img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .reward-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #111827;
  }

  .reward-description {
    font-size: 0.9rem;
    color: #4b5563;
    margin-bottom: 10px;
  }

  .reward-xp {
    font-size: 0.9rem;
    color: #2563eb;
    font-weight: 500;
  }

  .reward-status {
    margin-top: 8px;
    font-weight: 600;
  }

  .status-unlocked {
    color: #16a34a;
  }

  .status-locked {
    color: #dc2626;
  }

  .download-btn {
    margin-top: 12px;
    background-color: #3b82f6;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .download-btn:hover {
    background-color: #2563eb;
  }

  .locked-btn {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`,qi=({name:i,description:t,xpRequired:o,icon:l,link:s,unlocked:a})=>e.jsxDEV(Qi,{children:e.jsxDEV("div",{className:`reward-card ${a?"unlocked":"locked"}`,children:[e.jsxDEV("div",{className:"reward-icon",children:e.jsxDEV("img",{src:l,alt:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:16,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:15,columnNumber:9},void 0),e.jsxDEV("h3",{className:"reward-name",children:i},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:18,columnNumber:9},void 0),e.jsxDEV("p",{className:"reward-description",children:t},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:19,columnNumber:9},void 0),e.jsxDEV("p",{className:"reward-xp",children:["XP Required: ",e.jsxDEV("strong",{children:o},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:21,columnNumber:24},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:20,columnNumber:9},void 0),e.jsxDEV("p",{className:`reward-status ${a?"status-unlocked":"status-locked"}`,children:a?"Unlocked":"Locked"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:24,columnNumber:9},void 0),a?e.jsxDEV("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsxDEV("button",{className:"download-btn",children:"Download"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:34,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:33,columnNumber:11},void 0):e.jsxDEV("button",{className:"download-btn locked-btn",disabled:!0,children:"Locked"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:37,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:14,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/components/RewardComponent.jsx",lineNumber:13,columnNumber:5},void 0),Xi=()=>{const i=se(),t="wQj8AOeWOa8E6N9T4mCGSiZs7yv57s9FQ2NZvSVcywjazr19xVyCbAR33IL1IG9dtgHtlDaeEx3y303CLMzoHCc1ofR3LtWz1WykZxWi5GZjed661mrfTO57B2chKZtO",[o,l]=n.useState([]),[s,a]=n.useState(!0),[p,g]=n.useState("all"),[v,r]=n.useState(!1),c=i.state?.rewards||[];if(n.useEffect(()=>{(async()=>{try{const f=await A.get("/gamification/reward/get",{headers:{"x-api-key":t}}),h=c.map(b=>typeof b.rewardId=="string"?b.rewardId:b.rewardId._id),j=f.data.map(b=>({...b,unlocked:h.includes(b._id)}));l(j)}catch(f){console.error("Error:",f),y.error(f?.response?.data?.message||"No gamification profile!")}finally{a(!1)}})()},[t,c]),s)return e.jsxDEV("p",{className:"loading",children:"Loading rewards..."},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:48,columnNumber:23},void 0);if(!o.length)return e.jsxDEV("p",{className:"empty",children:"No rewards found!"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:49,columnNumber:31},void 0);const u=o.filter(d=>p==="unlocked"?d.unlocked:p==="locked"?!d.unlocked:!0),x=d=>{g(d),r(!1)};return e.jsxDEV(Yi,{children:[e.jsxDEV("div",{className:"rewards-header",children:[e.jsxDEV("h2",{children:"Rewards"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:65,columnNumber:9},void 0),e.jsxDEV("div",{className:"filter-toggle",onClick:()=>r(d=>!d),children:[e.jsxDEV(Ze,{size:18},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:71,columnNumber:11},void 0),e.jsxDEV("span",{children:"Filters"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:72,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:64,columnNumber:7},void 0),v&&e.jsxDEV("div",{className:"filter-dropdown",children:[e.jsxDEV("div",{className:`filter-option ${p==="all"?"active":""}`,onClick:()=>x("all"),children:"🌟 All"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:78,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${p==="unlocked"?"active":""}`,onClick:()=>x("unlocked"),children:[e.jsxDEV(Ke,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:88,columnNumber:13},void 0)," Unlocked"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:84,columnNumber:11},void 0),e.jsxDEV("div",{className:`filter-option ${p==="locked"?"active":""}`,onClick:()=>x("locked"),children:[e.jsxDEV(_e,{size:16},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:94,columnNumber:13},void 0)," Locked"]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:90,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:77,columnNumber:9},void 0),e.jsxDEV("div",{className:"rewards-grid",children:u.map(d=>e.jsxDEV(qi,{...d},d._id,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:101,columnNumber:11},void 0))},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:99,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/pages/RewardsPage.jsx",lineNumber:63,columnNumber:5},void 0)},eo=lt([{path:"/",element:e.jsxDEV(mt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:48,columnNumber:14},void 0),errorElement:e.jsxDEV(ii,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:49,columnNumber:19},void 0),children:[{index:!0,element:e.jsxDEV(di,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:53,columnNumber:18},void 0)},{path:"register",element:e.jsxDEV(Xt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:57,columnNumber:18},void 0),action:qt},{path:"/verify-email/:verificationToken",element:e.jsxDEV(Wi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:62,columnNumber:18},void 0)},{path:"login",element:e.jsxDEV(Qt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:66,columnNumber:18},void 0),action:Yt},{path:"verification",element:e.jsxDEV(gi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:71,columnNumber:18},void 0)},{path:"unsubscribe",element:e.jsxDEV(xi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:75,columnNumber:18},void 0)},{path:"/forgot-password",element:e.jsxDEV(Li,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:79,columnNumber:18},void 0),action:Si},{path:"/reset-password",element:e.jsxDEV(zi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:82,columnNumber:43},void 0)},{path:"profile",element:e.jsxDEV(ts,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:85,columnNumber:18},void 0)},{path:"ebooks",element:e.jsxDEV(hi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:89,columnNumber:18},void 0)},{path:"terms-and-conditions",element:e.jsxDEV(Ti,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:93,columnNumber:18},void 0)},{path:"privacy-policy",element:e.jsxDEV(Mi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:97,columnNumber:18},void 0)},{path:"dashboard",element:e.jsxDEV(Ut,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:101,columnNumber:18},void 0),loader:Vt,children:[{index:!0,element:e.jsxDEV(vi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:106,columnNumber:22},void 0)},{path:"diet",element:e.jsxDEV(Bt,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:110,columnNumber:22},void 0),children:[{path:"macros",element:e.jsxDEV(Di,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:115,columnNumber:26},void 0)},{path:"all-meals",element:e.jsxDEV(Fi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:119,columnNumber:26},void 0)}]},{path:"workout",element:e.jsxDEV(_t,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:125,columnNumber:22},void 0),children:[{path:"week/:weekId",element:e.jsxDEV(wi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:129,columnNumber:26},void 0)},{path:"week/:weekId/day/:dayNumber/exercise/:exerciseId",element:e.jsxDEV(yi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:133,columnNumber:26},void 0)}]},{path:"health",element:e.jsxDEV(ui,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:139,columnNumber:22},void 0)},{path:"profile",element:e.jsxDEV(ts,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:143,columnNumber:22},void 0),action:si},{path:"progress",element:e.jsxDEV(fi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:148,columnNumber:22},void 0),children:[{path:"sets",element:e.jsxDEV(Ui,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:150,columnNumber:40},void 0)},{path:"volume",element:e.jsxDEV(Ai,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:151,columnNumber:42},void 0)},{path:"weekly",element:e.jsxDEV(Vi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:152,columnNumber:42},void 0)}]},{path:"achievements",element:e.jsxDEV(Ri,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:157,columnNumber:22},void 0),children:[{path:"badges",element:e.jsxDEV(Gi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:159,columnNumber:42},void 0)},{path:"challenges",element:e.jsxDEV(_i,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:160,columnNumber:46},void 0)},{path:"rewards",element:e.jsxDEV(Xi,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:161,columnNumber:43},void 0)}]}]}]}]),so=()=>e.jsxDEV(at,{router:eo},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/App.jsx",lineNumber:170,columnNumber:10},void 0);ct.createRoot(document.getElementById("root")).render(e.jsxDEV(xe.StrictMode,{children:e.jsxDEV(Ot,{children:[" ",e.jsxDEV(Gt,{children:[e.jsxDEV(so,{},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/main.jsx",lineNumber:19,columnNumber:9},void 0),e.jsxDEV(pt,{position:"top-center"},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/main.jsx",lineNumber:20,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/main.jsx",lineNumber:18,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/main.jsx",lineNumber:15,columnNumber:5},void 0)},void 0,!1,{fileName:"C:/Users/Jovan Filipov/Desktop/FittestAppProject/client/src/main.jsx",lineNumber:14,columnNumber:3},void 0));
