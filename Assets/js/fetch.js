$(document).ready(() => {
  $.ajax({
    url: "https://api.github.com/users/amarcatovic/repos",
    success: function(result) {
      console.log(result);

      let git1, git2, git3;
      do {
        git1 = Math.floor(Math.random() * result.length);
        git2 = Math.floor(Math.random() * result.length);
        git3 = Math.floor(Math.random() * result.length);
      } while (git1 === git2 || git2 === git3 || git3 === git1);

      $("#github-project-name-text1").text(result[git1].name.replace(/-/g, " "));
      $("#github-language-text1").text(`Language: ${result[git1].language}`);
      $("#github-project-link1").attr("href", result[git1].html_url);

      $("#github-project-name-text2").text(result[git2].name.replace(/-/g, " "));
      $("#github-language-text2").text(`Language: ${result[git2].language}`);
      $("#github-project-link2").attr("href", result[git2].html_url);

      $("#github-project-name-text3").text(result[git3].name.replace(/-/g, " "));
      $("#github-language-text3").text(`Language: ${result[git3].language}`);
      $("#github-project-link3").attr("href", result[git3].html_url);
      console.log(result[git1].name, result[git2].name, result[git3].name);
    }
  });
});
