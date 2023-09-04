## Exercice React : Création de Composants et Utilisation des Props

Cet exercice a pour but d'apprendre à créer des composants React et à utiliser les props pour personnaliser leur contenu.

### Objectif de l'exercice :

- Comprendre la structure et la hiérarchie des composants React.
- Apprendre à passer des données entre les composants via les props.
- Mettre en pratique la création de composants réutilisables.

### Structure du projet :

- **App** : Le composant principal qui englobe tous les autres composants.
- **Avatar** : Un composant simple qui affiche une image.
- **Intro** : Un composant qui affiche un titre et une description.
- **SkillList** : Un composant qui liste plusieurs compétences.
- **Skill** : Un composant qui représente une compétence individuelle et qui est réutilisé plusieurs fois avec des props différents.

### Détails des composants :

- **App** : Englobe l'avatar, l'introduction et la liste des compétences.
- **Avatar** : Affiche une image gf.png.
- **Intro** : Affiche un titre et une description.
- **SkillList** : Liste des compétences. Chaque compétence est représentée par un composant Skill.
- **Skill** : Affiche le nom de la compétence, un emoji et utilise une couleur de fond spécifique passée en tant que prop.