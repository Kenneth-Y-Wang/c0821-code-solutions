
with "costForm" as (
  select "f"."title" as "title",
         "f"."filmId" as "filmId",
         "f"."replacementCost" as "replacementCost",
         "i"."inventoryId"
  from  "films" as "f"
  join  "inventory" as "i" using("filmId")
)



select "f"."title",
       "f"."description",
       sum("p"."amount") as "totalAmountMade",
       sum("costForm"."replacementCost") as "totalCost"
  from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  inner join "costForm" using ("filmId")
  group by "f"."filmId"
  order by "totalAmountMade" desc;



-- select "title",
--        "filmId",
--        sum("replacementCost")
--   from "costForm"
--   group by "filmId";
