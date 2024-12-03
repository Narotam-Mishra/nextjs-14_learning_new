"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-context';

export default function ClientRoutePage(){
  const settings = {
    dots: true,
  };

  const theme = useTheme()
  return (
    <h1 style={{
      color: theme.colors.secondary
    }}>Client route</h1>
  );
}