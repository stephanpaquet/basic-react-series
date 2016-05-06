# basic-react-series
https://www.youtube.com/watch?v=MhkGQAoc7bc&amp;list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&amp;index=1

## Notes
- Tout dans react est un component (au lieu d'un élément)
- L'endroit idéal pour initialisé le state .. c'est dans le constructor
- JSX convertit en syntax DOM ex. document.createElement
- au render, on ne peux avoir deux éléments, on doit toujours entouré d'un seul élément
- Best practice: on ne doit pas inclure de la logique dans le render, idéalement dans une methode de la class. Ou mieux encore .. utiliser un constructor de la class
- par defaut, state est null
- Dans le React Dev tool, on peux accéder aux commenents dans la console avec un $r
- ce qui permet par la suite de faire un changement de state, $r.setState({title: 'Welcome Bob!!!'});
- si on ne fait pas de .bind(this), la methode va s'écuter dans le contexte dans laquel elle a été déclarée
- Toute les fois que nous changeons la route, une nouveau component est recréé
- Pour prévenir des memory leeks, tous les listeners que nous créons dans componentWillMount on doit les supprimer dans la méthode componentWillUnmount

Github repo
https://github.com/learncodeacademy/react-js-tutorials

- change la manière que nous pensons
- Babel transpile le JS6 en JS5

Webpack Tutorial - Replace Gulp/Grunt plugins with a single tool
https://www.youtube.com/watch?v=9kJVYpOqcVU&feature=iv&annotation_id=annotation_4139363737&src_vid=MhkGQAoc7bc

ES6
https://www.youtube.com/playlist?list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif&feature=iv&annotation_id=annotation_270691829&src_vid=MhkGQAoc7bc


- Cool de savoir que y'a des versions exécutables dans node_modules/.bin et .. de cette manière on est certain d'utiliser la bonne version selon notre package.json
-
-
