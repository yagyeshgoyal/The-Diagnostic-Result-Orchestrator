export const DIAGNOSIS_CONFIG = {
  Glucose: {
    unit: 'mg/dL',
    normalRange: '70-99'
  },
  Cholesterol: {
    unit: 'mg/dL',
    normalRange: '<200'
  },
  Hemoglobin: {
    unit: 'g/dL',
    normalRange: '13.5-17.5'
  },
  Creatinine: {
    unit: 'mg/dL',
    normalRange: '0.7-1.3'
  }
}

export const isNormalValue = (value, range) => {
  if (!range || value === undefined) return true

  if (range.includes('-')) {
    const [min, max] = range.split('-').map(Number)
    return value >= min && value <= max
  }

  if (range.startsWith('<')) {
    return value < Number(range.replace('<', ''))
  }

  return true
}
