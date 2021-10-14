

with "costForm" as (
select   "f"."filmId" as "filmId",
         sum("f"."replacementCost") as "totalCost"
  from  "films" as "f"
  join  "inventory" as "i" using("filmId")
  group by "filmId"
),

 "total" as (
  select "f"."filmId" as "filmId",
         sum("p"."amount") as "totalMaking"
  from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "filmId"
)


select "f"."title",
       "f"."description",
       "f"."filmId",
       "t"."totalMaking"-"c"."totalCost" as "totalProfit"
  from "films" as "f"
  join "costForm" as "c" using ("filmId")
  join "total" as "t" using("filmId")
  group by "f"."filmId", "t"."totalMaking", "c"."totalCost"
  order by "totalProfit" desc
  limit 5;
