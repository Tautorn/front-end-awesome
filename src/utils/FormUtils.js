import React from 'react'

export const createSelectOptions = data => {
    return data.map(
        data => <option value={data.value} key={`${data.label}_${data.value}`}>{data.label}</option>
    )
}