// 主逻辑
async function loadArticle(filename) {
  const response = await fetch(`articles/${filename}`);
  const markdown = await response.text();
  const htmlContent = marked(markdown);
  document.getElementById('content').innerHTML = htmlContent;
}

// 默认加载 example.md
loadArticle('example.md');
