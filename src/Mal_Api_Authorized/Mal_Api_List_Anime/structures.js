const structuresAnime = require("../Mal_Api_Anime/structures.json");

const structuresList = [
  "status",
  "score",
  "num_watched_episodes",
  "is_rewatching",
  "start_date",
  "finish_date",
  "priority",
  "num_times_rewatched",
  "rewatch_value",
  "tags",
  "updated_at",
];

module.exports = structuresList.concat(structuresAnime.animeInList);
