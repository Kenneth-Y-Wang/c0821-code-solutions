select "countries"."name" as "country",
       count("c".*) as "totalCities"
  from "countries"
  join "cities" as "c" using ("countryId")
  group by "countries"."countryId";
