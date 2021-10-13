select "c"."name" as "category",
      count("f".*) as "numberOfMovies"
 from  "categories" as "c"
 join  "filmCategory" using ("categoryId")
 join  "films" as "f" using ("filmId")
 join  "castMembers" using ("filmId")
 join  "actors" as "a" using ("actorId")
 where "a"."firstName"='Lisa'
  and  "a"."lastName"='Monroe'
group by "c"."categoryId";
