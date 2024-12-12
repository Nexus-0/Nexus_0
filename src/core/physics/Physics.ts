import Ammo from 'ammo.js';

export class PhysicsSystem {
  physicsWorld: Ammo.btDiscreteDynamicsWorld;

  constructor() {
    Ammo().then((AmmoInstance) => {
      const collisionConfiguration = new AmmoInstance.btDefaultCollisionConfiguration();
      const dispatcher = new AmmoInstance.btCollisionDispatcher(collisionConfiguration);
      const broadphase = new AmmoInstance.btDbvtBroadphase();
      const solver = new AmmoInstance.btSequentialImpulseConstraintSolver();
      this.physicsWorld = new AmmoInstance.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    });
  }

  update() {
    this.physicsWorld.stepSimulation(1 / 60);
  }
}
