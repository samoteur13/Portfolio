

// j'ai créé ce fichier pour stocker les éléments necessaires pour la configuration de nodemailer
//j'ai je les ai mis ici car lorsque je pusherais sur git le dossier, le fichier "config;js" ne sera pas visible (et donc les infos non plus) car j'ai inscrit sa route dans gitignore
// je créé ensuite un fichier "config.js" dans la dossier ou je veux importer sur linux via la commande nano "config.js" et je colle le code


class Email {

  static  mailPass = "7m2rcsamy";
  static mail = "s.chabani13@gmail.com";

}

module.exports.Email = Email
