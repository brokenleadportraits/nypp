class Ability
  include CanCan::Ability

	  def initialize(user)
	    user ||= User.new # guest user (not logged in)
	    can :manage, User, id: user.id
			alias_action :create, :read, :update, to: :cru

		if user.admin?
			can :manage, Comment
		else
			can :cru, Comment
			cannot :destroy, Comment
		end
	end
end


