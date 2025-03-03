-- AlterTable
ALTER TABLE `user` ADD COLUMN `refresh_token` TEXT NULL,
    ADD COLUMN `verified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `password` VARCHAR(70) NULL,
    MODIFY `photo` TEXT NULL;
