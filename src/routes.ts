import { Router } from 'express';

import { ligatureCreateController } from './services/LigatureCreate';
import { ligatureDeleteController } from './services/LigatureDelete';
import { ligatureFindController } from './services/LigatureFind';
import { ligatureListController } from './services/LigatureList';
import { ligatureListByLineController } from './services/LigatureListByLine';
import { ligatureUpdateController } from './services/LigatureUpdate';
import { lineCreateController } from './services/LineCreate';
import { lineDeleteController } from './services/LineDelete';
import { lineFindController } from './services/LineFind';
import { lineListController } from './services/LineList';
import { lineStatusController } from './services/LineStatus';
import { lineUpdateController } from './services/LineUpdate';
import { operatorCreateController } from './services/OperatorCreate';
import { operatorDeleteController } from './services/OperatorDelete';
import { operatorFindController } from './services/OperatorFind';
import { operatorListController } from './services/OperatorList';
import { operatorUpdateController } from './services/OperatorUpdate';
import { stationCreateController } from './services/StationCreate';
import { stationDeleteController } from './services/StationDelete';
import { stationFindController } from './services/StationFind';
import { stationListController } from './services/StationList';
import { stationUpdateController } from './services/StationUpdate';

const router = Router();

router.get('/stations', (req, res) => stationListController.handle(req, res));
router.get('/stations/:id', (req, res) => stationFindController.handle(req, res));
router.post('/stations', (req, res) => stationCreateController.handle(req, res));
router.put('/stations/:id', (req, res) => stationUpdateController.handle(req, res));
router.delete('/stations/:id', (req, res) => stationDeleteController.handle(req, res));

router.get('/operators', (req, res) => operatorListController.handle(req, res));
router.get('/operators/:id', (req, res) => operatorFindController.handle(req, res));
router.post('/operators', (req, res) => operatorCreateController.handle(req, res));
router.put('/operators/:id', (req, res) => operatorUpdateController.handle(req, res));
router.delete('/operators/:id', (req, res) => operatorDeleteController.handle(req, res));

router.get('/lines/status', (req, res) => lineStatusController.handle(req, res));
router.get('/lines', (req, res) => lineListController.handle(req, res));
router.get('/lines/:id', (req, res) => lineFindController.handle(req, res));
router.post('/lines', (req, res) => lineCreateController.handle(req, res));
router.put('/lines/:id', (req, res) => lineUpdateController.handle(req, res));
router.delete('/lines/:id', (req, res) => lineDeleteController.handle(req, res));

router.get('/ligatures', (req, res) => ligatureListController.handle(req, res));
router.get('/ligatures/l/:lineId', (req, res) => ligatureListByLineController.handle(req, res));
router.get('/ligatures/:id', (req, res) => ligatureFindController.handle(req, res));
router.post('/ligatures', (req, res) => ligatureCreateController.handle(req, res));
router.put('/ligatures/:id', (req, res) => ligatureUpdateController.handle(req, res));
router.delete('/ligatures/:id', (req, res) => ligatureDeleteController.handle(req, res));

router.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));

export { router };
