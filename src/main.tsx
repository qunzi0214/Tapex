import React, { FC } from 'react'

class Person {
  constructor () {
    this.set = new Set()
    this.foo = {
      bar: {
        baz: 1,
      },
    }
  }

  log (): void {
    const res = this?.foo?.bar?.baz
    console.log(res)
  }
}

const Tapex: FC = () => {
  const p = new Person()
  p.log()

  return (
    <div>Tapex</div>
  )
}

export default Tapex
