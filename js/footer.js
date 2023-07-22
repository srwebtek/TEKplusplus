// this footer script is shown on all pages

// -----------------------------------------
// static HTML skeleton
// -----------------------------------------
const footerContent = `
  <div class="footerMenu">
    <ul id="footerMainNav" class="footerMainNav"></ul>
    <div class="footerHorizontalLine"></div>
    <ul id="footerSocialNav"></ul>
    <div class="footerHorizontalLine"></div>
    <ul id="footerPoliciesNav"></ul>
  </div>
  <div class="footerCopyright" aria-hidden="true">
    <a href="https://srwebtek.github.io/">Copyright srwebtek &copy 2023</a>
  </div>
`;
document.getElementById("footerDynamic").innerHTML = footerContent;

// -----------------------------------------
//  navigation menu
// -----------------------------------------

var mainNavOutput = "";
var socialNavOutput = "";
var policiesNavOutput = "";

fetch("../JSON/content.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.main.length; i++) {
      mainNavOutput +=
        '<li><a href="' + 
        data.main[i].link + 
        '">' + 
        data.main[i].title + 
        "</a></li>";
    }

    for (var i = 0; i < data.social.length; i++) {
      socialNavOutput +=
        '<li><img src="' +
        data.social[i].svg +
        '" alt="' +
        data.social[i].altText +
        '" /><a href="' +
        data.social[i].link +
        '">' +
        data.social[i].title +
        "</a></li>";
    }
    for (var i = 0; i < data.policies.length; i++) {
      policiesNavOutput +=
        '<li><img src="' +
        data.policies[i].svg +
        '" alt="' +
        data.policies[i].altText +
        '" /><a href="' +
        data.policies[i].link +
        '">' +
        data.policies[i].title +
        "</a></li>";
    }

    document.getElementById("footerMainNav").innerHTML = mainNavOutput;
    document.getElementById("footerSocialNav").innerHTML = socialNavOutput;
    document.getElementById("footerPoliciesNav").innerHTML = policiesNavOutput;
  });
