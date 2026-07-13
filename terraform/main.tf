resource "azurerm_resource_group" "employee_rg" {

  name = var.resource_group_name

  location = var.location

}