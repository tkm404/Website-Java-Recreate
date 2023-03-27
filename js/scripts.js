window.onload = function() {
  let h1 = document.querySelector("h1");
  h1.remove();
  const h1a = document.createElement("h1");
  h1a.append("Website Recreation Practice");
  document.querySelector("body").append(h1a);
  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpages was created with JavaScript.");
  document.querySelector("body").append(pElement);
  const imgTanager = document.createElement("img");
  imgTanager.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  imgTanager.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  imgTanager.style = "width:50%";
  document.querySelector("body").append(imgTanager);
  const h1b = document.createElement("h1");
  h1b.append("Fact about the Multicolored Tanager");
  document.querySelector("body").append(h1b);
  const ul = document.createElement("ul");
  document.querySelector("body").append(ul);
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  document.querySelector("ul").append(li1, li2);
  const h2 = document.createElement("h2");
  h2.append("Source");
  document.querySelector("body").append(h2);
  const a = document.createElement("a");
  a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  a.append("Wikipedia")
  document.querySelector("body").append(a);

}
