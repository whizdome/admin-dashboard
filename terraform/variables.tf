variable "region" {
  description = "The AWS region to deploy to"
  type        = string
}

variable "cluster_name" {
  description = "The name of the EKS cluster"
  type        = string
}

variable "node_group_name" {
  description = "The name of the EKS node group"
  type        = string
}

variable "desired_size" {
  description = "The desired size of the node group"
  type        = number
}

variable "max_size" {
  description = "The maximum size of the node group"
  type        = number
}

variable "min_size" {
  description = "The minimum size of the node group"
  type        = number
}
