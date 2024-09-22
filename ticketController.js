import { response } from "express";
import Ticket from "../model/ticketModel.js"

export const create = async(req,res)=>{
    try{
        const ticket = new Ticket(req.body);
        const { title } = ticket;
        const ticketalreadyExist = await Ticket.findOne({ title });
        if (ticketalreadyExist) {
            return res.status(400).json({ message:'Ticket Already Raised' })
        }
        const savedTicket = await ticket.save();
        res.status(201).json(savedTicket);
        
    }catch(error){
        res.status(500).json({error:'Internal server error.'})
    }
}

export const fetch = async(req,res)=>{
    try{
        const ticket  = await Ticket.find();
        if(ticket.length===0){
            return res.status(404).json({message:'Ticket not found.'});
        }
        res.status(200).json(ticket);
    }catch(error){
        res.status(500).json({error:'Internal server error.'})
    }
}

export const getTicket = async(req,res)=>{
    try{
        const id = req.params.id;
        const ticket = await Ticket.findOne({_id:id})
        if(!ticket){
            return res.status(404).json({message:'Ticket Not Raised'})
        }
        res.status(200).json(ticket);
    }catch(error){
        res.status(500).json({error:'Internal server error.'})
    }
}
export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const ticketalreadyExist = await Ticket.findOne({ _id: id});
        if(!ticketalreadyExist){
            return res.status(404).json({message:'Ticket not found.'})
        }
        const Update = await Ticket.findByIdAndUpdate(id,req.body, {
            new:true
        })
        res.status(201).json(Update);


    }catch(error){
        res.status(500).json({error:'Internal server error.'})

    }
}

export const deleteTicket = async(req, res) =>{
    try{
        const id = req.params.id;
        const ticketalreadyExist = await Ticket.findOne({ _id: id});
        if(!ticketalreadyExist){
            return res.status(404).json({message:'Ticket not found.'})
        }
        await Ticket.findByIdAndDelete(id);
        res.status(201).json({message:'Ticket Deleted Successfulyy'})
    }catch(error){
        res.status(500).json({error:'Internal server error.'})

    }
}