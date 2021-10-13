select "actors"."firstName",
       "actors"."lastName"
 from  "castMembers"
 join  "actors" using ("actorId")
 join  "films"  as "f" using ("filmId")
 where "f"."title"='Jersey Sassy';
