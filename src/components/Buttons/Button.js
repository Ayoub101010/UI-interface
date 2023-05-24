import React, { Component } from 'react'
import { getAllProperties, setProperty, deleteProperty } from '../../services/policyHandler'
class Button extends Component {
  onClick() {
    console.log('onClick')
    try {
      let testProp = {
        coverage: 1,
        coverage_seed: 0,
        filter: {
          group: {
            group1: '1',
          },
        },
        key: 'Test::Enable',
        ns: 'ada',
        value: '51',
      }
      //getAllProperties()
      setProperty(testProp)
      //deleteProperty(testProp)

      console.log('onClick done')
    } catch (error) {
      console.log('call failed')
    }
  }

  render() {
    return (
      <section>
        <button type='button' className='btn btn-danger' onClick={this.onClick}>
          Apply SSU Rollout Policy
        </button>
      </section>
    )
  }
}

export default Button
