import moment from 'moment';
import { ObjectManipulationDates } from '../../../types';

export const datesFactory = {
  format: 'YYYY-MM-DD HH:mm:ss',
  getFormattedDate: function (date: string | Date = new Date()): string {
    return moment(date).format(this.format);
  },
  getCreationDate: function (date: string | Date = new Date()): { createdAt: string; } {
    return { createdAt: this.getFormattedDate(date), };
  },
  getUpdateDate: function (date: string | Date = new Date()): { updatedAt: string; } {
    return { updatedAt: this.getFormattedDate(date), };
  },
  getManipulationDates: function (
    creationDate: string | Date = new Date(),
    updateDate: string | Date = new Date(),
  ): ObjectManipulationDates {
    return {
      ...this.getCreationDate(creationDate),
      ...this.getUpdateDate(updateDate),
    };
  },
};