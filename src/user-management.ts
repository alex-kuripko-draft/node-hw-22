export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean = false
      ) {}

      changeAdminRights(isSuperAdmin: boolean): void {
        this.isSuperAdmin = isSuperAdmin;
      }

      displayInfo(): void {
        console.log(`Admin Name: ${this.name}, Email: ${this.email}, Super Admin: ${this.isSuperAdmin}`);
      }
    }
  }
}