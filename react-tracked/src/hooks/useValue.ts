import { useState } from 'react';

export const useValue = () => useState({ count: 0, text: 'hello ' });
