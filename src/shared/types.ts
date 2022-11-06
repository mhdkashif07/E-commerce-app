import React, { ReactElement } from 'react';

export interface GetLayout {
    getLayout?: (page: ReactElement) => React.ReactNode
  }

export interface allDataTypes {
    mens: {
        id: number;
        image: string;
        name: string;
        price: string;
        description: string;
    }[]
} 