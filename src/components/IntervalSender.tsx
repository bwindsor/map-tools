import * as React from "react"

interface Props {
    interval: number,
    cb: () => void
}

export default class IntervalSender extends React.Component<Props, undefined> {
    t: number

    componentDidMount() {
        this.t = setInterval(()=>this.props.cb(), this.props.interval)
    }
    componentWillUnmount() {
        clearInterval(this.t)
    }
    render () { return <span></span> }
}