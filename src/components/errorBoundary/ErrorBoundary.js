import react, {Component} from 'react'
import styles from './style.module.scss'

class ErrorBoundary extends  Component {

    constructor(){
        super()
        this.state ={
            hasError: false
        }
    }

    static getDerivedStateFromError( error){
        return {
            hasError :true  
        }
    }

    render(){
        const error = this.state.hasError
       if(error){
        return <div className={styles.container}>
            We are facing some technical issues in fetching the movies. Please try again later.
        </div>
       }
       return this.props.children
    }
}

export default ErrorBoundary