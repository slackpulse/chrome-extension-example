// https://animestore.docomo.ne.jp/animestore/tp_pc
const targets = document.querySelectorAll('ul.newsBlock.news')
for (const target of targets) {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        console.log(node.textContent)
      })
    });
  })
  const options = {
    childList: true,
  }
  observer.observe(target, options);
}
