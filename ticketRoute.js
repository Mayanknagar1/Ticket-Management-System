import express from 'express'
import { fetch, getTicket ,create, update, deleteTicket } from '../controller/ticketController.js'

const route = express.Router();

route.post('/create',create);
route.get('/getAllTickets',fetch);
route.get('/getOneTicket/:id',getTicket)
route.put('/update/:id',update);
route.delete('/delete/:id',deleteTicket)


export default route;