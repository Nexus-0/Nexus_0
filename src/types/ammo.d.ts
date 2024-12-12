declare module 'ammo.js' {
  const Ammo: () => Promise<AmmoInstance>

  export interface AmmoInstance {
    btDefaultCollisionConfiguration: new () => any
    btCollisionDispatcher: new (config: any) => any
    btDbvtBroadphase: new () => any
    btSequentialImpulseConstraintSolver: new () => any
    btDiscreteDynamicsWorld: new (
      dispatcher: any,
      broadphase: any,
      solver: any,
      collisionConfig: any,
    ) => any
  }

  export default Ammo
}
