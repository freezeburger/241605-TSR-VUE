
interface SingletonFactory<T>{
    new (): any
    getInstance():T
}

function SingletonCreator<T>(){
    return <_ extends SingletonFactory<T>>(constructor:SingletonFactory<T>) => {constructor}
}

interface DesiredService{}

@SingletonCreator<DesiredService>()
class ConcreteFactory{
    static getInstance():DesiredService{
        throw ''
    }
}