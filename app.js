require('dotenv').config()
const port  = process.env.PORT || 3000;
const fastify = require('fastify')({logger:true});
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/todos',
    swagger: {
      info: { title: 'Todo Rest APIs' },
    },
  })

fastify.get('/',async(req,reply)=>{
    reply.send({success:true,msg : "fastiy running."})
})
const startServer = async () =>{
    try {
        await fastify.listen(port);
        await fastify.log
    } catch (error) {
        fastify.log.error(error);
        process.exit(1)
    }
}
startServer();