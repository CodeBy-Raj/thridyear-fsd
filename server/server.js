import { log } from 'console';
import http from  'http';
import os from 'os';
const server = http.createServer((req1,res1)=>{
    const url= req1.url;
    const method=req1.method;
if(url=="/" && method=='GET'){
    res1.write("Home page");
}
    else if(url=="/system" && method=='GET'){
        res1.write("system page");
        const systemOs={
            operatingSystem:os.platform(),
            Architecture:os.arch(),
            cpusLength:os.cpus().length,
            TotalMemory:(os.totalmem()/1024**3).toFixed(2)+"GB",
            freeMemory:(os.freemem()/1024**3).toFixed(2)+"GB",
            uptime:os.uptime()+"s",
            userInfo:os.userInfo(),
            networkInterfaces:os.networkInterfaces()
        }
        
        
        res1.write(JSON.stringify(systemOs, null, 2));
    }
    
    else if(url=="/about" && method=='GET'){
        res1.write("about page");
    }
    else if(url=="/contact" && method=='GET'){
        res1.write('contact page');
    }
    else if(url.startsWith('/users') && method=='PUT') res1.write('Edite page');
    else if(url.startsWith('/users') && method=='DELETE') res1.write('Delete page');
    else res1.write("error page");
    res1.end();

});

const port=8001;
server.listen(port,()=>{
    console.log(`server is listening at ${port}`);
});