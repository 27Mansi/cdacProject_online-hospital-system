package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IRecepDao;
import com.app.pojos.Receptionist;
@Service
@Transactional
public class RecepServiceImpl implements IRecepService{
	@Autowired
	private IRecepDao dao;
	@Override
	public Receptionist addRecepDetails(Receptionist r) {
		
		return dao.registerRecep(r);
	}

}
