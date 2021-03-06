# Migration `20200908234019-tomei-no-toba`

This migration has been generated by Joao Gabriel at 9/8/2020, 8:40:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER INDEX "public"."StationsOnLine.id_unique" RENAME TO "_stationsOnLine.id_unique"

ALTER INDEX "public"."StationsOnLine_nextId_unique" RENAME TO "_stationsOnLine_nextId_unique"

ALTER INDEX "public"."Line.name_unique" RENAME TO "lines.name_unique"

ALTER INDEX "public"."Line.number_unique" RENAME TO "lines.number_unique"

ALTER INDEX "public"."Station.fullName_unique" RENAME TO "stations.fullName_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200908232336-aaa..20200908234019-tomei-no-toba
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -24,9 +24,8 @@
   alias      String
   lines      Line[]
   createdAt  DateTime  @default(now())
   updatedAt  DateTime  @default(now()) @updatedAt
-
 }
 model Line {
   id         String    @id @default(uuid())
@@ -39,8 +38,10 @@
   createdAt  DateTime  @default(now())
   updatedAt  DateTime  @default(now()) @updatedAt
   company    Company    @relation(fields: [companyId], references: [id])
+
+  @@map("lines")
 }
 model Station {
   id           String    @id @default(uuid())
@@ -49,8 +50,10 @@
   elevator     Boolean?  @default(false)
   lines        StationsOnLine[]
   createdAt    DateTime  @default(now())
   updatedAt    DateTime  @default(now()) @updatedAt
+
+  @@map("stations")
 }
 model StationsOnLine {
   @@id([lineId, stationId])
@@ -64,5 +67,7 @@
   station     Station  @relation(fields: [stationId], references: [id])
   next        StationsOnLine? @relation("line-station-link", fields: [nextId], references: [id])
   previous    StationsOnLine? @relation("line-station-link")
+
+  @@map("_stationsOnLine")
 }
```


