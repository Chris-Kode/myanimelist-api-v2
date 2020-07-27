const structuresManga = require("../Mal_Api_Manga/structures.json");

const structuresList = [
  "status",
  "score",
  "num_volumes_read",
  "num_chapters_read",
  "is_rereading",
  "start_date",
  "finish_date",
  "priority",
  "num_times_reread",
  "reread_value",
  "tags",
  "updated_at",
];

module.exports = structuresList.concat(structuresManga.mangaInList);
