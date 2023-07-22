// this sitemap script is only shown on sitemap.xml

// -----------------------------------------
// static HTML skeleton
// -----------------------------------------
const sitemapDynamic = `
<div class="sitemapPage">
<h2>Sitemap</h2>
<ul>
  <li><h3>Social Media</h3></li>
  <div id="sitemapSocialNav"</div>
</ul>     
<ul>
  <li><h3>Site Pages</h3></li>
  <li><a href="../index.html"><p class="indentOne">HOME</p></a></li>
  <div id="sitemapMainNav"</div>
</ul>  
<ul>
  <li><h3>Site Policies</h3></li>
  <div id="sitemapPoliciesNav"</div>
</ul>     
</div>
`;
document.getElementById("sitemapDynamic").innerHTML = sitemapDynamic;

// -----------------------------------------
//  navigation menu
// -----------------------------------------

var sitemapMainNav = "";
var sitemapMainPagesNav = "";
var sitemapSocialNav = "";
var sitemapPoliciesNav = "";

fetch("../JSON/content.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.social.length; i++) {
      sitemapSocialNav +=
        '<li><a href="' +
        data.social[i].link +
        '"><p class="indentOne">' +
        data.social[i].title +
        "</p></a></li>";
    }

    for (var i = 0; i < data.main.length; i++) {
      sitemapMainNav +=
        '<li><a href="' +
        data.main[i].link +
        '"><p class="indentOne">' +
        data.main[i].title +
        "</p></a></li>";

        for (var ii = 0; ii < data.main[i].pages.length; ii++) {
          sitemapMainNav +=
            '<li><a href="' +
            data.main[i].pages[ii].link +
            '"><p class="indentTwo">' +
            data.main[i].pages[ii].title +
            "</p></a></li>";
        }
    }


    for (var i = 0; i < data.policies.length; i++) {
      sitemapPoliciesNav +=
        '<li><a href="' +
        data.policies[i].link +
        '"><p class="indentOne">' +
        data.policies[i].title +
        "</p></a></li>";
    }

    document.getElementById("sitemapSocialNav").innerHTML = sitemapSocialNav;
    document.getElementById("sitemapMainNav").innerHTML = sitemapMainNav;
    // document.getElementById("sitemapMainPagesNav").innerHTML = sitemapMainPagesNav;
    document.getElementById("sitemapPoliciesNav").innerHTML =
      sitemapPoliciesNav;
  });
