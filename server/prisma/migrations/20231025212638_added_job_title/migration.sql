-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventLocation" TEXT NOT NULL,
    "eventStart" TEXT,
    "eventEnd" TEXT,
    "totalMembers" TEXT,
    "eventInfo" TEXT,
    "eventFee" TEXT,
    "eventCreatorId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventJoin" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,

    CONSTRAINT "EventJoin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventCreatorId_fkey" FOREIGN KEY ("eventCreatorId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventJoin" ADD CONSTRAINT "EventJoin_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventJoin" ADD CONSTRAINT "EventJoin_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
