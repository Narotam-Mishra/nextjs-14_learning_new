"use client"

import React from 'react';
import { useTheme } from '@/components/theme-context';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage(){
  const result = clientSideFunction();
  const theme = useTheme();

  return (
    <h1 style={{
      color: theme.colors.primary
    }}>Client route : {result}</h1>
  );
}